import dotenv from "dotenv";

// Load the repository-level environment file before any other module code runs.
dotenv.config({ path: `${process.cwd()}/../.env` });

// MY_ENV is the master mode switch: `sharedConstants` derives IS_DEV/IS_PROD
// from it, and those flags in turn select the database, the session secret, and
// whether mail goes to a real inbox. An unset or misspelled value makes IS_DEV
// true, which would silently point production at the dev database with dev
// credentials, so refuse to start instead of guessing.
//
// This is deliberately checked here rather than in `sharedConstants` itself,
// which is also imported by browser code.
const MY_ENV_MODES = ["development", "staging", "production", "test"];

if (!MY_ENV_MODES.includes(process.env.MY_ENV ?? "")) {
  throw new Error(
    `MY_ENV must be one of ${MY_ENV_MODES.join(", ")} — got ` +
      `${process.env.MY_ENV ? `"${process.env.MY_ENV}"` : "no value"}. ` +
      `Refusing to start: an unrecognized MY_ENV silently selects the ` +
      `development database and development secrets.`,
  );
}
