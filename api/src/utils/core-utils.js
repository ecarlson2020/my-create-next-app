import fs from "fs";
import mysql from "mysql2/promise";
import process from "process";

const stagingDomain = "test2.evrocamedia";
const productionDomain = "listacart";
const prodPort = 5006;
const devPort = 5003;

export const IS_PROD = process.env.NODE_ENV === "production";
export const IS_STAGING = process.env.NODE_ENV === "staging";
export const IS_DEV = !IS_PROD && !IS_STAGING;
export const PORT = IS_PROD ? prodPort : devPort;
export const DOMAIN = IS_PROD ? productionDomain : stagingDomain;
export const WEB_URL =
  process.env.NODE_ENV === "production"
    ? `https://${productionDomain}.com`
    : `https://${stagingDomain}.com`;

const dbPassword = IS_DEV
  ? "app_password"
  : fs.readFileSync("/home/ecarlson10/pw/0", "utf8").trim();

// Database connection pool
let pool = null;

export const initDB = () => {
  if (pool) {
    return pool;
  }

  const dbConfig = IS_DEV
    ? {
        host: "localhost",
        port: 3306,
        user: "app_user",
        database: "app_db",
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

export const sql = async (query, fields) => {
  if (!pool) {
    initDB();
  }
  const [rows] = await pool.execute(query, fields);
  return rows;
};
