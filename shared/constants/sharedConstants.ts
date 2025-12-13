const stagingDomain = "test2.evrocamedia";
// TODO: update the production domain
const productionDomain = "adamselectric";
// TODO: update the port
const prodPort = 5009;
const devPort = 5003;

export const IS_STAGING = process.env.MY_ENV === "staging";
export const IS_PROD = process.env.MY_ENV === "production";
export const IS_DEV = !IS_PROD && !IS_STAGING;
export const PORT = IS_PROD ? prodPort : devPort;
export const DOMAIN = IS_PROD ? productionDomain : stagingDomain;
export const WEB_URL = IS_PROD
  ? `https://www.${productionDomain}.com`
  : IS_STAGING
    ? `https://${stagingDomain}.com`
    : "http://localhost:5001";
export const API_URL = IS_PROD
  ? `https://${productionDomain}.com:${PORT}`
  : IS_STAGING
    ? `https://${stagingDomain}.com:${PORT}`
    : `http://localhost:${PORT}`;
