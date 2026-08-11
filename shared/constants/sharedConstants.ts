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
// Staging is proxied exactly like production: Apache serves /api/ on the
// staging vhost too (~/sites-enabled/testN.evrocamedia.com.conf), so both
// use the relative path on their own origin. Only dev is unproxied, which
// is why it alone needs an explicit host:port.
export const API_URL = IS_DEV ? `http://localhost:${PORT}` : "/api";
// Absolute form, for server-side callers that cannot use a relative path —
// Stripe rejects a relative success_url with `url_invalid`. Dev's API_URL is
// already absolute, so only the proxied environments differ.
export const API_URL_ABSOLUTE = IS_DEV ? API_URL : `${WEB_URL}/api`;
