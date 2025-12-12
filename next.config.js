const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  output: "export",
  env: {
    MY_ENV: process.env.MY_ENV,
  },
  transpilePackages: ["@mui/x-data-grid", "@mui/x-date-pickers"],
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
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
