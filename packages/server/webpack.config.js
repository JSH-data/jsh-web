const path = require("path");
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = () => {
  return {
    name: "node-server",
    mode: 'production',
    entry: "./src/main.ts",
    target: 'node',
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      plugins: [
        PnpWebpackPlugin,
      ],
    },
    // resolveLoader: {
    //   plugins: [
    //     PnpWebpackPlugin.moduleLoader(module),
    //   ],
    // },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        // {
        //   test: /\.tsx?$/,
        //   loader: require.resolve('ts-loader'),
        //   exclude: /node_modules/
        // },

      ]
    },
  }
}
