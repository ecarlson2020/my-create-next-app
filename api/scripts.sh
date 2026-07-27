#!/bin/bash
set -e

PROD_PORT=4999 # TODO: UPDATE THIS BEFORE DEPLOYING

function dev {
  MY_ENV=development tsx watch ./src/server.ts
}

function staging-watch {
  MY_ENV=staging tsx watch ./src/server.ts
}

function staging {
  npm run build
  MY_ENV=staging node ./dist/api/src/server.js
}

function prod {
  npm run build
  MY_ENV=production node ./dist/api/src/server.js
}

function build {
  npm i
  # tsc never removes output for deleted or renamed sources, so stale .js piles
  # up in dist and reads as live code long after its source is gone — a compiled
  # file from a route deleted months ago was still holding an old secret path.
  # Deploys kill the API before building, so clearing dist here is safe.
  rm -rf dist
  tsc
  tsc-alias
}

function kill-staging {
  fuser -k 5003/tcp
}

function kill-prod {
  fuser -k $PROD_PORT/tcp
}

function lint {
  npx eslint --fix ./src
}

function test {
  MY_ENV=test tsx ./src/testServer.ts
}

"$@"
