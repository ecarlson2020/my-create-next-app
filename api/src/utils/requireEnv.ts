/**
 * Read a required environment variable, throwing if it is missing or blank.
 *
 * Call this at module scope rather than inside a request handler. `server.ts`
 * imports the whole route/util graph up front, so a module-scope call turns a
 * missing variable into an immediate boot failure — the process exits non-zero
 * before it binds the port, and `deploy-api` reports it. Called lazily instead,
 * the same misconfiguration would surface as a 500 on the first customer
 * request that happened to touch it.
 *
 * An empty or whitespace-only value counts as missing, matching how
 * `scripts/validate-env.mjs` treats it, so a variable left blank in `.env`
 * fails the same way an absent one does.
 */
export const requireEnv = (name: string): string => {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};
