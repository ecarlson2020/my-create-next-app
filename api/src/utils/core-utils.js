import fs from "fs";
import mysql from "mysql2/promise";
import process from "process";

const stagingDomain = "test2.evrocamedia";
const prodPort = 5006;
const devPort = 5003;
const isProd = process.env.NODE_ENV === "production";
const isStaging = process.env.NODE_ENV === "staging";
const dbPassword =
  isProd || isStaging
    ? fs.readFileSync("/home/ecarlson10/pw/0", "utf8").trim()
    : "123";
const productionDomain = "listacart";

export const PORT = isProd ? prodPort : devPort;
export const DOMAIN = isProd ? productionDomain : stagingDomain;
export const WEB_URL =
  process.env.NODE_ENV === "production"
    ? `https://${productionDomain}.com`
    : `https://${stagingDomain}.com`;

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
