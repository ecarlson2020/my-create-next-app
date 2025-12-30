#!/bin/bash
set -e

echo This needs to be updated to the production website
exit 1
PROD_PORT=5006

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
