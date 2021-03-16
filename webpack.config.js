const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  plugins: [new ESLintPlugin(options)],
  resolve: {
    extensions: ['.js', '.json']
  }
};
