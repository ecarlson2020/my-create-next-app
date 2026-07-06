#!/bin/bash
set -e

PRODUCTION_WEBSITE=something

pretty='"src/**/*.{js,jsx,ts,tsx}" "shared/**/*.{js,jsx,ts,tsx}" "api/src/**/*.{js,jsx,ts,tsx}" "e2e/**/*.{js,jsx,ts,tsx}" "*.{js,jsx,ts,tsx}"'

lint_dirs="--dir src --dir e2e"

# Short hash of the currently checked-out commit, baked into the build so the
# UI can display which commit is deployed. "unknown" if git is unavailable.
GIT_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo unknown)
export GIT_COMMIT

function lint {
  next lint --max-warnings 0 $lint_dirs
}

function fix {
  npm run pretty-fix
  next lint --fix $lint_dirs
  npx tsc
  npx unimported
  cd api
  npm run lint
  npx unimported
  npm run test
  npm run build

  cd ..
  npm run e2e
}

function pretty {
  prettier --check $pretty
}

function pretty-fix {
  prettier --write $pretty
}

function ui {
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

function check_remote_out_absent {
  if ssh ecarlson10@192.168.0.2 '[ -e ~/out ]'; then
    echo "Error: ~/out already exists on the remote (192.168.0.2)." >&2
    exit 1
  fi
}

function up-staging {
  check_remote_out_absent
  npm run build-staging
  qscp -u out
}

function up-prod {
  check_remote_out_absent
  npm run build-prod
  qscp -u out
}

function down-staging {
  echo "make sure to run npm run grab-images-staging first then press ENTER"
  read
  website_location='/home/ecarlson10/webapps/test2.evrocamedia'
  rm -rf "$website_location"
  mv ~/out "$website_location"
}

function down-prod {
  # Grabbing images, running migrations, and restarting the API are now handled
  # by the deploy function, so this just swaps the freshly-built site into place.
  website_location="/home/ecarlson10/webapps/$PRODUCTION_WEBSITE"
  rm -rf "$website_location"
  mv ~/out "$website_location"
}

# Production deploy, intended to be run ON the prod server. Split into one
# function per deployable part (db / api / ui) so each is independently runnable,
# with `deploy` as a dispatcher (see below). The parts automate the checklist
# that down-prod used to print.

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

# Restart the prod API, daemonized (nohup + disown) so it survives this script
# exiting — important for an api-only deploy that returns immediately. kill-prod
# already tolerates an empty port (|| true). Output goes to
# ~/logs/$PRODUCTION_WEBSITE.log.
function deploy-api {
  mkdir -p ~/logs
  cd api
  npm run kill-prod
  # Pipe stdout+stderr through a read-loop that stamps each line with the local
  # time. The whole pipeline is wrapped in `nohup bash -c` so both the server and
  # the timestamping reader survive this script (and any SSH session) exiting.
  nohup bash -c 'npm run prod 2>&1 | while IFS= read -r line; do printf "[%s] %s\n" "$(date "+%Y-%m-%d %H:%M:%S")" "$line"; done' \
    > ~/logs/$PRODUCTION_WEBSITE.log 2>&1 &
  disown
  cd ..
}

# Swap the freshly-shipped static frontend into place. Build + ship is the
# separate local `up-prod` step; both calls below are existing, cwd-independent
# npm scripts.
function deploy-ui {
  npm run grab-images-prod
  npm run down-prod
  git status
}

# Dispatcher. With no args, runs the full default: api + ui (no migrations).
# Otherwise selective — numbers are migration ids, `api`/`ui` select components,
# and only the named parts run, always in db -> api -> ui order regardless of how
# they were typed. deploy-api is non-blocking (daemonized), so it overlaps the ui
# swap just as the old single-function deploy did.
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

function grab-images-staging {
  rsync -aE --delete /home/ecarlson10/webapps/test2.evrocamedia/images/ /home/ecarlson10/projects/$PRODUCTION_WEBSITE/public/images
}

function grab-images-prod {
  rsync -aE --delete /home/ecarlson10/webapps/$PRODUCTION_WEBSITE/images/ /home/ecarlson10/projects/$PRODUCTION_WEBSITE/public/images
}

"$@"
