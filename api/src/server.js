import https from "https";
import express from "express";
import fs from "fs";
import cors from "cors";
// utils
import { isProd } from "./utils/core-utils.js";
// end points
import {
  testRoute
} from "./routes/test.js";

/**
 *
 * IMPORTANT: dont forget to enable port forwarding on the router
 *
 */

const app = express();

const privateKeyPath = "/home/ecarlson10/cert/listacart-key.pem";
const getCredentials = () => {
  const privateKey = fs.readFileSync(privateKeyPath, "utf8");
  const certificate = fs.readFileSync(
    "/home/ecarlson10/cert/listacart-cert.pem",
    "utf8",
  );
  const fullchain = fs.readFileSync(
    "/home/ecarlson10/cert/listacart-fullchain.pem",
    "utf8",
  );
  return {
    key: privateKey,
    cert: certificate,
    ca: fullchain,
  };
};

app.use(express.json());
app.use(cors());

// protected endpoints
app.get("/recipe/list", testRoute);

const httpsServer = https.createServer(getCredentials(), app);
const port = isProd ? 5006 : 5003;
httpsServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});

fs.watchFile(privateKeyPath, () => {
  try {
    httpsServer.setSecureContext(getCredentials());
  } catch (e) {
    console.error(e);
  }
});
