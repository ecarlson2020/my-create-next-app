# Database Setup

This directory contains everything needed to run MySQL locally via Docker for development.

## Prerequisites

- Install Docker GUI

## Quick Start

1. Copy the environment variables file:
   ```bash
   cp .env.example .env
   ```

2. Start the MySQL container:
   ```bash
   docker-compose up -d mysql
   ```

## Database Credentials

Default credentials (defined in `docker-compose.yml`):

Change these in `docker-compose.yml` and your `.env` file as needed.

## Managing the Database

### Start the database
```bash
docker-compose up -d mysql
```

### Stop the database
```bash
docker-compose down
```

### Stop and remove all data (fresh start)
```bash
docker-compose down -v
```

### View logs
```bash
docker-compose logs -f mysql
```

### Access MySQL CLI
```bash
docker exec -it mysql_dev mysql -u root -p
# Enter password: root_password
```

### Run a specific migration
```bash
docker exec -i mysql_dev mysql -u root -proot_password app_db < db/migrations/001_create_users_table.sql
```

## phpMyAdmin (Optional)

A phpMyAdmin interface is included for easier database management.

1. Start phpMyAdmin:
   ```bash
   docker-compose up -d phpmyadmin
   ```

2. Access it at: http://localhost:8080
   - **Server**: mysql
   - **Username**: root
   - **Password**: root_password

## Creating New Migrations

See `/db/migrations/README.md` for migration guidelines.

Quick steps:
1. Create a new file: `db/migrations/00X_description.sql`
2. Write your SQL
3. Restart the container to apply: `docker-compose restart mysql`
   - Or run manually (see "Run a specific migration" above)