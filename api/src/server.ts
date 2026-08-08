// IMPORTANT: This must be the first import to ensure env vars load before any other module code
import "./env";

import http from "http";
import express from "express";
import cors from "cors";

// utils
import { initDB } from "./utils/coreUtils";
// end points
import { testRoute } from "./routes/test";
import { IS_PROD, PORT } from "@shared/constants/sharedConstants";

/**
 *
 * IMPORTANT: this server is reached at https://<domain>/api/, proxied by
 * Apache. It is NOT exposed directly, so no router port forwarding is needed
 * — see the listen call at the bottom of this file for the whole story.
 *
 */

const app = express();

// Initialize database connection pool
initDB();

app.use(express.json());
// Production is same-origin: Apache proxies /api/ to this server on the site's
// own origin, so the browser never applies CORS and these headers would go
// unused. Dev and staging run the frontend and the API on different ports and
// still need them, as does the e2e suite.
if (!IS_PROD) {
  app.use(cors());
}

// endpoints
app.get("/test/list", testRoute);

// Apache terminates TLS and proxies /api/ here over loopback, so this server
// speaks plain HTTP and never reads a certificate. Production binds 127.0.0.1
// specifically: the port must not be reachable off the box, since the only
// supported entry point is https://<domain>/api/. Dev and staging bind every
// interface so LAN devices can reach them directly.
//
// The vhost this pairs with (~/sites-enabled/<domain>.com.conf) needs, inside
// its :443 block — with prodPort substituted:
//
//   ProxyPreserveHost On
//   RequestHeader set X-Forwarded-Proto https
//   ProxyPass        /api/ http://127.0.0.1:<prodPort>/
//   ProxyPassReverse /api/ http://127.0.0.1:<prodPort>/
//
// That strips the /api prefix, matching the bare route paths registered above
// (`/test/list`, not `/api/test/list`). If you instead mount routes under
// /api, the upstream must end in /api/ too or every route 404s.
//
// Two things to add if this project grows into them: `app.set("trust proxy", 1)`
// before any express-session with a `secure` cookie (otherwise req.secure is
// false behind the proxy and the session cookie is silently never set), and
// API_URL_ABSOLUTE for anything building a URL a third party will fetch.
const host = IS_PROD ? "127.0.0.1" : "0.0.0.0";
const httpServer = http.createServer(app);
httpServer.listen(PORT, host, () => {
  // eslint-disable-next-line no-console
  console.log(`HTTP server listening on ${host}:${PORT}`);
});
