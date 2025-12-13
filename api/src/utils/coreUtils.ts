import { IS_DEV, IS_PROD } from "@shared/constants/sharedConstants";
import fs from "fs";
import mysql, { Pool, RowDataPacket } from "mysql2/promise";

const dbPassword = IS_DEV
  ? "app_password"
  : fs.readFileSync("/home/ecarlson10/pw/0", "utf8").trim();

// Database connection pool
let pool: Pool | null = null;

export const initDB = (): Pool => {
  if (pool) {
    return pool;
  }

  const dbConfig = IS_DEV
    ? {
        host: "localhost",
        port: 3306,
        user: "app_user",
        database: "evroca_db_dev",
        password: "app_password",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      }
    : {
        host: "localhost",
        user: "evroca_user",
        database: `evroca_db${IS_PROD ? "" : "_test"}`,
        password: dbPassword,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      };

  pool = mysql.createPool(dbConfig);

  // Test connection
  pool
    .getConnection()
    .then((connection) => {
      // eslint-disable-next-line no-console
      console.log("Database connected successfully");
      connection.release();
    })
    .catch((err) => {
      console.error("Database connection failed:", err);
    });

  return pool;
};

export const sql = async <T extends RowDataPacket>(
  query: string,
  fields?: unknown[],
): Promise<T[]> => {
  if (!pool) {
    initDB();
  }
  const [rows] = await pool!.execute<T[]>(query, fields);
  return rows;
};
