import fs from "fs";
import mysql from "mysql2/promise";
import process from "process";

const dbPassword = fs.readFileSync("/home/ecarlson10/pw/0", "utf8").trim();
export const productionDomain = "listacart"
export const testDomain ="test4.evrocamedia" 

export const isProd = process.env.NODE_ENV === "production";
export const webUrl =
  process.env.NODE_ENV === "production"
    ? `https://${productionDomain}.com`
    : `https://${testDomain}.com`;

/**
 * Execute a SQL query
 * @param {string} query - SQL query string
 * @param {any[]} [fields] - Query parameters
 * @returns {Promise<any>} Query results
 */
export const sql = async (query, fields) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "evroca_user",
    database: `evroca_db${isProd ? "" : "_test"}`,
    password: dbPassword,
  });
  const [rows] = await connection.execute(query, fields);
  connection.destroy();
  return rows;
};
