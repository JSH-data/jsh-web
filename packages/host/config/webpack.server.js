const path = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: "server",
  mode: "production",
  target: false,
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/server/index')],
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "index.js",
    libraryTarget: 'commonjs-module',
  },
  plugins: [...moduleFederationPlugin.server],
  stats: {
    colors: true,
  },
};

module.exports = merge(shared, webpackConfig);
