var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    mode: "development",
    entry: './code.js', 
    output: {
      path: path.resolve(__dirname, "."), 
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, "."), // the root for the server
      watchContentBase: true, // so we reload if other stuff like CSS changes
      port: 9000, // it'll now be at http://localhost:9000
    },
    plugins: [
      new WebpackNotifierPlugin({alwaysNotify: true}),
    ]
  };