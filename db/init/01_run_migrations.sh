#!/bin/bash
# This script runs all migration files when the MySQL container first starts

set -e

echo "Running database migrations..."

# Wait for MySQL to be fully ready
until mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "SELECT 1" &> /dev/null; do
  echo "Waiting for MySQL to be ready..."
  sleep 2
done

# Run all migration files in order
for migration in /migrations/*.sql; do
  if [ -f "$migration" ]; then
    echo "Applying migration: $(basename "$migration")"
    mysql -u root -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE" < "$migration"
  fi
done

echo "All migrations completed successfully!"
