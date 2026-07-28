const ESLintPlugin = require("eslint-webpack-plugin");

// MY_ENV is inlined into the bundle by the `env` block below, so whatever it is
// at build time is frozen into the static export. Unset, `sharedConstants`
// derives IS_DEV === true and the deployed site would point at localhost URLs.
// Fail the build here rather than shipping that, and rather than putting a throw
// in `sharedConstants` itself where it would run in the browser.
//
// Every command in scripts.sh sets MY_ENV inline, including the `next lint` ones
// — this file is loaded by lint too, not just by builds.
const MY_ENV_MODES = ["development", "staging", "production", "test"];

if (!MY_ENV_MODES.includes(process.env.MY_ENV)) {
  throw new Error(
    `MY_ENV must be one of ${MY_ENV_MODES.join(", ")} — got ` +
      `${process.env.MY_ENV ? `"${process.env.MY_ENV}"` : "no value"}. ` +
      `Refusing to build: an unrecognized MY_ENV bakes localhost URLs into the ` +
      `static export.`,
  );
}

module.exports = {
  output: "export",
  reactStrictMode: true,
  // A static export has no image optimization server; images are pre-rendered to
  // AVIF/WebP by scripts/optimize-images.mjs and served as plain assets through
  // <OptimizedImage>.
  images: { unoptimized: true },
  // Tree-shake MUI barrel imports so only the components actually used ship in
  // the bundle.
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },
  env: {
    MY_ENV: process.env.MY_ENV,
  },
  transpilePackages: ["@mui/x-data-grid", "@mui/x-date-pickers"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new ESLintPlugin({
          files: "src/**/*.(js|jsx|ts|tsx)",
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          overrideConfigFile: ".eslintrc.js",
          emitError: true,
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        }),
      );
    }
    // Important: return the modified config
    return config;
  },
};
