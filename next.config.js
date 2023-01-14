const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (!isServer) {
      config.plugins.push(
        new ESLintPlugin({
          files: 'pages/**/*.(js|jsx|ts|tsx)',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          overrideConfigFile: '.eslintrc.js',
          emitError: true,
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        })
      );
    }
    // Important: return the modified config
    return config
  },
}
