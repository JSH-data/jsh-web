const path = require('path');
const { merge } = require('webpack-merge');
const deps = require('../package.json').dependencies;
const sharedWebpackConfig = require('./webpack.shared');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: "./src/client/index.tsx",
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].js",
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote1: 'remote1@http://localhost:3001/client/remoteEntry.js',
      },
      shared: [{ react: deps.react, 'react-dom': deps['react-dom'] }],
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
