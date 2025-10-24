# Database Migrations

This directory contains SQL migration files for the database schema.

## Naming Convention

Migration files should follow this naming pattern:
```
NNN_descriptive_name.sql
```

Where:
- `NNN` is a sequential number (e.g., 001, 002, 003)
- `descriptive_name` describes what the migration does

## Creating a New Migration

1. Determine the next sequential number
2. Create a new `.sql` file with an appropriate name
3. Write your SQL migration code
4. Test locally using Docker before committing

## Running Migrations

Migrations are automatically executed when the MySQL container starts.
They run in alphabetical/numerical order.

To manually run migrations:
```bash
docker exec -i mysql_container mysql -u root -p database_name < db/migrations/YOUR_MIGRATION.sql
```

## Example

See `001_create_users_table.sql` for an example migration.
