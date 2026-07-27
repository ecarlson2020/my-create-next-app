import fs from "node:fs";
import path from "node:path";
import nextEnv from "@next/env";

// .env.example doubles as the manifest of which variables are required, so a
// variable is only demanded in the modes it actually applies to. A marker
// comment scopes every variable after it, until the next marker:
//
//   # @all               required in every mode (the default before any marker)
//   # @development-only  local work only (development and test)
//   # @non-production    everything except production (development, test, staging)
//   # @non-development   every deployed mode (staging and production)
//   # @production-only   production deploys only
//   # @test-only         required only by the Playwright suite
//   # @optional          documented, never required
//
// The two "non-" scopes exist because staging sits between the others and the
// older vocabulary could not express it: ADMIN_PASSWORD and
// STRIPE_LIVE_SECRET_KEY were both @production-only, yet staging needs the first
// and not the second. They mirror the guards the code actually uses —
// @non-development matches `!IS_DEV` (a real secret rather than a dev literal)
// and @non-production matches `!IS_PROD` (the test key rather than the live one).
//
// Secrets live in .env rather than in files under /home/ecarlson10/pw/ — only
// the genuinely cross-repo ones (the MariaDB password, the shared mailbox
// passwords) remain there, read by path with no variable name. Prefer the
// narrowest accurate scope, so that `npm run ui` never demands a live key.
// `test` implies development, since the e2e suite drives the local dev stack.
const REQUIRED_SCOPES = {
  development: new Set(["all", "development-only", "non-production"]),
  test: new Set(["all", "development-only", "test-only", "non-production"]),
  staging: new Set(["all", "non-development", "non-production"]),
  production: new Set(["all", "non-development", "production-only"]),
};

const KNOWN_SCOPES = new Set([
  "all",
  "development-only",
  "non-development",
  "non-production",
  "production-only",
  "test-only",
  "optional",
]);

const MODES = Object.keys(REQUIRED_SCOPES);
const mode = process.argv[2];

if (!MODES.includes(mode)) {
  console.error(`Error: expected an environment mode of ${MODES.join(", ")}.`);
  process.exit(1);
}

const projectDirectory = process.cwd();
const examplePath = path.join(projectDirectory, ".env.example");

if (!fs.existsSync(examplePath)) {
  console.error("Error: .env.example was not found.");
  process.exit(1);
}

// A marker is a comment whose entire content is @<scope>, which keeps it from
// colliding with the prose comments that document each variable.
const MARKER = /^\s*#\s*@([A-Za-z-]+)\s*$/;
const ASSIGNMENT = /^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=/;

const scopesInEffect = REQUIRED_SCOPES[mode];
const required = new Set();
let scope = "all";

for (const [index, line] of fs
  .readFileSync(examplePath, "utf8")
  .split("\n")
  .entries()) {
  const marker = line.match(MARKER);

  if (marker) {
    scope = marker[1];

    // Fail loudly rather than silently mis-scoping a variable: a typo in a
    // marker would otherwise quietly drop a real requirement.
    if (!KNOWN_SCOPES.has(scope)) {
      console.error(
        `Error: unknown marker "@${scope}" in .env.example line ${index + 1}.`,
      );
      console.error(
        `Expected one of: ${[...KNOWN_SCOPES].map((name) => `@${name}`).join(", ")}.`,
      );
      process.exit(1);
    }

    continue;
  }

  const assignment = line.match(ASSIGNMENT);

  if (assignment && scopesInEffect.has(scope)) {
    required.add(assignment[1]);
  }
}

// Nothing required in this mode — either the file documents no variables at all,
// or every variable it documents is scoped to some other mode.
if (required.size === 0) {
  process.exit(0);
}

// Only the local modes should pick up .env.development; staging and production
// are deploys and load the same files production does.
const isLocalMode = mode === "development" || mode === "test";

nextEnv.loadEnvConfig(projectDirectory, isLocalMode);

const missingVariables = [...required].filter(
  (name) => !process.env[name]?.trim(),
);

if (missingVariables.length > 0) {
  console.error(`Error: missing required ${mode} environment variables:`);
  for (const name of missingVariables) {
    console.error(`  - ${name}`);
  }
  console.error(
    "Define them in the shell or in the appropriate Next.js environment file.",
  );
  process.exit(1);
}
