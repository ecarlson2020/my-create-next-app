#!/bin/bash
set -e

PRODUCTION_WEBSITE=something

pretty='"src/**/*.{js,jsx,ts,tsx}" "shared/**/*.{js,jsx,ts,tsx}" "api/src/**/*.{js,jsx,ts,tsx}" "e2e/**/*.{js,jsx,ts,tsx}" "*.{js,jsx,ts,tsx}"'

lint_dirs="--dir src --dir e2e"

# Short hash of the currently checked-out commit, baked into the build so the
# UI can display which commit is deployed. "unknown" if git is unavailable.
GIT_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo unknown)
export GIT_COMMIT

# `next lint` loads next.config.js, which now refuses to run without a valid
# MY_ENV. Linting is static analysis rather than a build, so the mode is
# arbitrary — but it has to be set, same as every other command here.
function lint {
  MY_ENV=development next lint --max-warnings 0 $lint_dirs
}

function fix {
  npm run pretty-fix
  MY_ENV=development next lint --fix $lint_dirs
  npx tsc
  npx unimported
  cd api
  npm run lint
  npx unimported
  npm run test
  npm run build

  cd ..
  # This Pi is the production web server. A full Playwright run competes with
  # the live sites for CPU and memory, so skip it here and run e2e on a dev
  # machine instead. FORCE_E2E=1 npm run fix overrides.
  #
  # Read the model via tr rather than grep: /proc/device-tree/model ends in a
  # NUL byte, which makes grep treat it as binary and report no match.
  pi_model=$( { tr -d '\0' < /proc/device-tree/model; } 2>/dev/null || true)
  if [ "${FORCE_E2E:-}" != "1" ] && [[ $pi_model == *"Raspberry Pi"* ]]; then
    echo "Skipping e2e: $pi_model detected (production web server)."
    echo "Run e2e on a dev machine, or use FORCE_E2E=1 npm run fix to override."
  else
    npm run e2e
  fi
}

function pretty {
  prettier --check $pretty
}

function pretty-fix {
  prettier --write $pretty
}

function validate-env {
  node scripts/validate-env.mjs "$1"
}

# Fail before Playwright spins up a browser if the test environment is not
# configured. Args pass through, so `npm run e2e -- --grep foo` still works.
function e2e {
  validate-env test
  playwright test "$@"
}

function ui {
  validate-env development
  npm i
  MY_ENV=development next dev -p 5001
}

function api {
  cd api
  npm i
  npm run dev
}

function db {
  docker-compose up -d mysql
  docker-compose up -d phpmyadmin
}

# Truncate this app's dev tables. All sites share the `evroca_db_dev` dev
# database with per-app table prefixes, so list only this project's tables here.
function db-truncate {
  docker exec -i mysql_dev mariadb -uroot -proot_password evroca_db_dev <<-EOSQL
    -- TRUNCATE TABLE <prefix>_example;
EOSQL
  echo "✓ All tables truncated successfully"
}

function db-down {
  docker-compose down -v
}

function build-staging {
  npm i
  npm run pretty
  npm run lint
  MY_ENV=staging next build
}

function build-prod {
  npm i
  npm run pretty
  npm run lint
  MY_ENV=production next build
}

# Guard the local rm -rf / mv in the deploy steps below: these repos also live
# on the laptop, so a deploy accidentally run off the Pi 5 should fail fast
# instead of clobbering a bogus path.
function require_pi {
  if [ ! -d /home/ecarlson10/webapps ]; then
    echo "Error: run this on the Pi 5 (missing /home/ecarlson10/webapps)." >&2
    exit 1
  fi
}

# Production deploy, run on the Pi 5 (which now both builds and hosts the
# sites). Split into one function per deployable part (db / api / ui) so each is
# independently runnable, with `deploy` as a dispatcher (see below). The parts
# automate the checklist the old up → down flow used to require by hand.

# Apply the given migrations IN ORDER, before the new API starts, so it never
# queries columns/tables that don't exist yet. e.g. `npm run deploy-db 010 011`
# runs db/migrations/010_*.sql then 011_*.sql. Prod DB credentials mirror
# api/src/utils/coreUtils.ts.
function deploy-db {
  for num in "$@"; do
    migration=$(ls db/migrations/${num}_*.sql 2>/dev/null | head -1)
    if [ -z "$migration" ]; then
      echo "Error: no migration matching db/migrations/${num}_*.sql" >&2
      exit 1
    fi
    echo "→ Applying migration: $migration"
    mysql -u evroca_user -p"$(cat /home/ecarlson10/pw/0)" evroca_db < "$migration"
  done
}

# The API port lives in api/scripts.sh, but not always the same way: some repos
# declare `PROD_PORT=<n>` and reference it from kill-prod, others hardcode the
# number inside kill-prod. Read whichever form is present rather than duplicating
# the port here, and fail loudly if neither is found — an empty port would make
# the readiness check below hang for its full timeout and then report a healthy
# deploy as broken.
function prod-port {
  port=$(grep -oP '^PROD_PORT=\K[0-9]+' api/scripts.sh || true)
  if [ -z "$port" ]; then
    port=$(sed -n '/function kill-prod/,/^}/p' api/scripts.sh \
      | grep -oP 'fuser -k \K[0-9]+' || true)
  fi
  if [ -z "$port" ]; then
    echo "Error: could not determine the API port from api/scripts.sh." >&2
    exit 1
  fi
  echo "$port"
}

# `fuser -k` returns before the kernel has actually released the socket, so the
# readiness check further down could otherwise match the *dying* old process and
# report success for a replacement that never came up. Wait for the port to clear
# first, which makes the later LISTEN unambiguously the new server.
function wait-for-port-free {
  port=$1
  for _ in $(seq 30); do
    ss -ltn "sport = :$port" | grep -q LISTEN || return 0
    sleep 1
  done
  echo "Error: port $port was still held 30s after kill-prod." >&2
  exit 1
}

# The API is daemonized, so nothing in the terminal would otherwise report a
# server that dies during startup — a missing env var, a port still held, a
# failed DB connect. Poll until it listens, and surface the log if it never does.
function wait-for-api {
  port=$1
  # `npm run prod` builds (npm i + tsc + tsc-alias) before it starts listening,
  # which is not fast on the Pi, hence the generous ceiling.
  for _ in $(seq 180); do
    if ss -ltn "sport = :$port" | grep -q LISTEN; then
      echo "✓ API listening on port $port"
      return 0
    fi
    sleep 1
  done
  echo "Error: API never started listening on port $port (waited 180s)." >&2
  echo "Last 20 lines of ~/logs/$PRODUCTION_WEBSITE.log:" >&2
  tail -20 ~/logs/$PRODUCTION_WEBSITE.log >&2
  exit 1
}

# Restart the prod API, daemonized (nohup + disown) so it survives this script
# exiting — important for an api-only deploy that returns immediately. kill-prod
# already tolerates an empty port (|| true). Output is APPENDED to
# ~/logs/$PRODUCTION_WEBSITE.log.
#
# Appended, not truncated: redeploying is the first thing you reach for while
# investigating a production error, and with `>` that wiped the stack trace you
# were about to read. The log therefore grows across deploys — see the header
# line written below for where each restart begins.
function deploy-api {
  # Validate BEFORE kill-prod, not after: the API reads its secrets from .env at
  # boot (api/src/env.ts), so a deploy that cannot possibly start must not take
  # the running API down first and report the reason afterwards in a log file.
  # validate-env resolves @next/env from the root install, so ensure it exists —
  # a no-op for any repo that has already been built on this box.
  [ -d node_modules ] || npm i
  validate-env production
  mkdir -p ~/logs
  prod_port=$(prod-port)
  cd api
  npm i
  npm run kill-prod
  wait-for-port-free "$prod_port"
  # Pipe stdout+stderr through a read-loop that stamps each line with the local
  # time. The whole pipeline is wrapped in `nohup bash -c` so both the server and
  # the timestamping reader survive this script (and any SSH session) exiting.
  printf '\n===== deploy %s =====\n' "$(date '+%Y-%m-%d %H:%M:%S')" \
    >> ~/logs/$PRODUCTION_WEBSITE.log
  nohup bash -c 'npm run prod 2>&1 | while IFS= read -r line; do printf "[%s] %s\n" "$(date "+%Y-%m-%d %H:%M:%S")" "$line"; done' \
    >> ~/logs/$PRODUCTION_WEBSITE.log 2>&1 &
  disown
  cd ..
  # Blocks until the server is actually up, so a failed deploy exits non-zero
  # here instead of looking like a success. This gives up the old overlap with
  # the ui swap; a deploy that silently left the API down was the worse trade.
  wait-for-api "$prod_port"
}

# Build the static frontend on the Pi 5, sync live user-uploaded images, and
# swap the bundle into place; require_pi guards the local rm -rf / mv.
function deploy-ui {
  # Same root-deps guard as deploy-api: validate-env needs @next/env, and
  # build-prod's own `npm i` happens after this point.
  [ -d node_modules ] || npm i
  validate-env production
  require_pi
  npm run build-prod
  npm run grab-images-prod
  website_location="/home/ecarlson10/webapps/$PRODUCTION_WEBSITE"
  rm -rf "$website_location"
  mv out "$website_location"
  git status
}

function deploy-staging {
  # Staging had no gate at all: a missing variable only surfaced once the built
  # site was already swapped in. Same root-deps guard as the other deploy paths.
  [ -d node_modules ] || npm i
  validate-env staging
  require_pi
  npm run build-staging
  website_location='/home/ecarlson10/webapps/test2.evrocamedia'
  rm -rf "$website_location"
  mv out "$website_location"
  git status
}

# Dispatcher. With no args, runs the full default: api + ui (no migrations).
# Otherwise selective — numbers are migration ids, `api`/`ui` select components,
# and only the named parts run, always in db -> api -> ui order regardless of how
# they were typed. deploy-api now blocks until the API is confirmed listening, so
# a failed api deploy aborts before the ui swap rather than overlapping it.
#
# Examples:
#   npm run deploy            -> api + ui
#   npm run deploy api ui     -> api + ui
#   npm run deploy 010 011    -> migrations 010 and 011 only
#   npm run deploy 010 api    -> migration 010, then api (no ui)
#   npm run deploy ui         -> ui only
function deploy {
  if [ $# -eq 0 ]; then
    deploy-api
    deploy-ui
    return
  fi

  migrations=()
  do_api=false
  do_ui=false
  for arg in "$@"; do
    case "$arg" in
      api) do_api=true ;;
      ui)  do_ui=true ;;
      *[!0-9]*) echo "Error: unknown deploy target '$arg'" >&2; exit 1 ;;
      *) migrations+=("$arg") ;;
    esac
  done

  if [ ${#migrations[@]} -gt 0 ]; then deploy-db "${migrations[@]}"; fi
  if $do_api; then deploy-api; fi
  if $do_ui;  then deploy-ui;  fi
}

function grab-images-prod {
  src="/home/ecarlson10/webapps/$PRODUCTION_WEBSITE/images"
  if [ ! -d "$src" ]; then
    echo "grab-images-prod: $src not found, skipping image sync." >&2
    return 0
  fi
  rsync -aE --delete "$src/" /home/ecarlson10/projects/$PRODUCTION_WEBSITE/public/images
}

"$@"
