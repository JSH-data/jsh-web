const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.shared');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: "./src/index.tsx",
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
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
