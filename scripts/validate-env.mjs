import fs from "node:fs";
import path from "node:path";
import nextEnv from "@next/env";

// .env.example doubles as the manifest of which variables are required, so a
// variable is only demanded in the modes it actually applies to. A marker
// comment scopes every variable after it, until the next marker:
//
//   # @all               required in every mode (the default before any marker)
//   # @development-only  required for local work, not for a deploy
//   # @production-only   required for a deploy, not locally
//   # @test-only         required only by the Playwright suite
//   # @optional          documented, never required
//
// The @development-only scope exists because staging and prod read most secrets
// from files under /home/ecarlson10/pw/ rather than from the environment (see
// getStripeSecretKey, getEmailPassword, getGeminiApiKey). Marking those
// development-only keeps deploys from demanding variables production never
// reads. `test` implies development, since the e2e suite drives the local dev
// stack.
const REQUIRED_SCOPES = {
  development: new Set(["all", "development-only"]),
  production: new Set(["all", "production-only"]),
  test: new Set(["all", "development-only", "test-only"]),
};

const KNOWN_SCOPES = new Set([
  "all",
  "development-only",
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

nextEnv.loadEnvConfig(projectDirectory, mode !== "production");

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
