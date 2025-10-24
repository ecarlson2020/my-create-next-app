# Database Setup

This directory contains everything needed to run MySQL locally via Docker for development.

## Directory Structure

```
db/
├── README.md              # This file
├── init/                  # Initialization scripts (run on first container start)
│   ├── 01_run_migrations.sh   # Automatically runs all migrations
│   └── 02_seed_data.sql       # Optional seed data for development
└── migrations/            # SQL migration files
    ├── README.md          # Migration guidelines
    └── 001_create_users_table.sql  # Example migration
```

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

3. Verify the container is running:
   ```bash
   docker-compose ps
   ```

4. The database will be automatically initialized with all migrations from the `/db/migrations` directory.

## Database Credentials

Default credentials (defined in `docker-compose.yml`):

- **Host**: localhost
- **Port**: 3306
- **Database**: app_db
- **User**: app_user
- **Password**: app_password
- **Root Password**: root_password

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

## Connecting from Your Application

### Node.js (mysql2)
```javascript
const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
```

### Using Prisma
```
DATABASE_URL="mysql://app_user:app_password@localhost:3306/app_db"
```

### Using Sequelize
```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
);
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs mysql

# Remove and recreate
docker-compose down -v
docker-compose up -d mysql
```

### Connection refused
- Ensure the container is running: `docker-compose ps`
- Check the container is healthy: `docker-compose ps` (should show "healthy")
- Verify port 3306 is not in use by another service

### Migrations not running
- Check init logs: `docker-compose logs mysql`
- Ensure migration files have `.sql` extension
- Verify file permissions on `db/init/01_run_migrations.sh`

## Data Persistence

MySQL data is persisted in a Docker volume named `mysql_data`. This means:
- Data survives container restarts
- Data is removed with `docker-compose down -v`
- You can backup/restore this volume

### Backup
```bash
docker exec mysql_dev mysqldump -u root -proot_password app_db > backup.sql
```

### Restore
```bash
docker exec -i mysql_dev mysql -u root -proot_password app_db < backup.sql
```

## Production Notes

This setup is designed for local development. For production:
- Use strong, unique passwords
- Don't commit `.env` files
- Use proper secrets management
- Configure backups
- Set up SSL/TLS connections
- Review MySQL security best practices
