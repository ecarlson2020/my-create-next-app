import fs from "node:fs";
import path from "node:path";
import nextEnv from "@next/env";

const VALID_MODES = new Set(["development", "production"]);
const mode = process.argv[2];

if (!VALID_MODES.has(mode)) {
  console.error(
    "Error: expected an environment mode of development or production.",
  );
  process.exit(1);
}

const projectDirectory = process.cwd();
const examplePath = path.join(projectDirectory, ".env.example");

if (!fs.existsSync(examplePath)) {
  console.error("Error: .env.example was not found.");
  process.exit(1);
}

const requiredVariables = [
  ...new Set(
    [
      ...fs
        .readFileSync(examplePath, "utf8")
        .matchAll(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=/gm),
    ].map((match) => match[1]),
  ),
];

if (requiredVariables.length === 0) {
  console.error(
    "Error: .env.example does not define any environment variables.",
  );
  process.exit(1);
}

nextEnv.loadEnvConfig(projectDirectory, mode === "development");

const missingVariables = requiredVariables.filter(
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
