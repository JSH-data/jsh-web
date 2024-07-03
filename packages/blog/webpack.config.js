const client = require("./config/webpack.client");
const server = require("./config/webpack.server");
const dev = require("./config/webpack.dev");

module.exports = (env, argv) => {
  if(argv.mode === "development") {
    return dev;
  }

  return [client, server];
}
