import http from "http";
import https from "https";
import express from "express";
import fs from "fs";
import cors from "cors";

// utils
import { initDB } from "./utils/coreUtils";
// end points
import { testRoute } from "./routes/test";
import { DOMAIN, IS_DEV, PORT } from "@shared/constants/sharedConstants";

/**
 *
 * IMPORTANT: don't forget to enable port forwarding on the router
 *
 */

const app = express();

// Initialize database connection pool
initDB();

app.use(express.json());
app.use(cors());

// endpoints
app.get("/test/list", testRoute);

if (IS_DEV) {
  // Use HTTP for local development
  const httpServer = http.createServer(app);
  httpServer.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`HTTP server listening on port ${PORT}`);
  });
} else {
  // Use HTTPS for production/staging
  const privateKeyPath = `/home/ecarlson10/cert/${DOMAIN}-key.pem`;
  const getCredentials = (): https.ServerOptions => {
    const privateKey = fs.readFileSync(privateKeyPath, "utf8");
    const certificate = fs.readFileSync(
      `/home/ecarlson10/cert/${DOMAIN}-cert.pem`,
      "utf8",
    );
    const fullchain = fs.readFileSync(
      `/home/ecarlson10/cert/${DOMAIN}-fullchain.pem`,
      "utf8",
    );
    return {
      key: privateKey,
      cert: certificate,
      ca: fullchain,
    };
  };

  const httpsServer = https.createServer(getCredentials(), app);
  httpsServer.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`HTTPS server listening on port ${PORT}`);
  });

  fs.watchFile(privateKeyPath, () => {
    try {
      httpsServer.setSecureContext(getCredentials());
    } catch (e) {
      console.error(e);
    }
  });
}
