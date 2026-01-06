#!/bin/bash
set -e

echo This needs to be updated to the production website
exit 1
PRODUCTION_WEBSITE=something

function lint {
  next lint --max-warnings 0
}

function fix {
  yarn pretty-fix
  next lint --fix
  yarn tsc
  npx unimported
  cd api
  yarn tsc
  npm run lint
  npm run test
  npm run build
}

function pretty {
  prettier --check "src/**/*.{js,jsx,ts,tsx}" "shared/**/*.{js,jsx,ts,tsx}" "api/src/**/*.{js,jsx,ts,tsx}" "*.{js,jsx,ts,tsx}"
}

function pretty-fix {
  prettier --write "src/**/*.{js,jsx,ts,tsx}" "shared/**/*.{js,jsx,ts,tsx}" "api/src/**/*.{js,jsx,ts,tsx}" "*.{js,jsx,ts,tsx}"
}

function ui {
  yarn
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

function db-down {
  docker-compose down -v
}

function db-truncate {
  docker exec -i mysql_dev mysql -uroot -proot_password evroca_db_dev <<-EOSQL
    TRUNCATE TABLE picnic_potential_booking;
    TRUNCATE TABLE picnic_gift;
    TRUNCATE TABLE picnic_gallery;
    TRUNCATE TABLE picnic_earliest_possible;
    TRUNCATE TABLE picnic_coupons;
    TRUNCATE TABLE picnic_cart;
    TRUNCATE TABLE picnic_block;
    TRUNCATE TABLE picnic_appointment;
EOSQL
  echo "✓ All tables truncated successfully"
}

function build-staging {
  yarn
  yarn pretty
  yarn lint
  MY_ENV=staging next build
}

function build-prod {
  yarn
  yarn pretty
  yarn lint
  MY_ENV=production next build
}

function up-staging {
  yarn build-staging
  qscp -u out
}

function up-prod {
  yarn build-prod
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
  echo "make sure to do the following, then press ENTER"
  echo "1. npm run grab-images-prod"
  echo "2. manually run db migrations"
  echo "3. In the api: npm run kill-prod"
  echo "4. In the api: npm run prod &"
  read
  website_location="/home/ecarlson10/webapps/$PRODUCTION_WEBSITE"
  rm -rf "$website_location"
  mv ~/out "$website_location"
}

function grab-images-staging {
  rsync -aE --delete /home/ecarlson10/webapps/test2.evrocamedia/images/ /home/ecarlson10/projects/$PRODUCTION_WEBSITE/react/public/images
}

function grab-images-prod {
  rsync -aE --delete /home/ecarlson10/webapps/$PRODUCTION_WEBSITE/images/ /home/ecarlson10/projects/$PRODUCTION_WEBSITE/react/public/images
}

"$@"
