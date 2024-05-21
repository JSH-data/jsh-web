const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Cache Clean, Devtools

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", 'ts-loader'],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      })
    ]
  }
}
