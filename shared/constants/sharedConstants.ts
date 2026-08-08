const stagingDomain = "test2.evrocamedia";
// TODO: update the production domain
const productionDomain = "something";
// TODO: update the port
const prodPort = 4999;
const devPort = 5003;

const isStaging = process.env.MY_ENV === "staging";

export const IS_PROD = process.env.MY_ENV === "production";
export const IS_DEV = !IS_PROD && !isStaging;
export const PORT = IS_PROD ? prodPort : devPort;
export const DOMAIN = IS_PROD ? productionDomain : stagingDomain;
export const WEB_URL = IS_PROD
  ? `https://${productionDomain}.com`
  : isStaging
    ? `https://${stagingDomain}.com`
    : "http://localhost:5001";
// Production talks to the API on its own origin: Apache proxies /api/ through
// to the Express server on 127.0.0.1:<prodPort> (see the vhost in
// ~/sites-enabled), which is why the API binds loopback and speaks plain HTTP.
// An absolute https://host:port would be unreachable from any network that
// allows only 80/443 — corporate wifi, guest wifi, some mobile carriers — and
// would fail silently there.
//
// Staging and dev keep an explicit host:port: neither has a proxy in front of
// it, so a relative path would resolve against the page origin and 404.
export const API_URL = IS_PROD
  ? "/api"
  : isStaging
    ? `https://${stagingDomain}.com:${PORT}`
    : `http://localhost:${PORT}`;
// Absolute form, for server-side callers that cannot use a relative path —
// Stripe, for one, rejects a relative success_url with `url_invalid`. Only
// production differs.
export const API_URL_ABSOLUTE = IS_PROD ? `${WEB_URL}/api` : API_URL;
