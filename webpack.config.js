var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    mode: "development",
    entry: './code.ts', 
    output: {
      path: path.resolve(__dirname, "distribution"), 
      filename: 'bundle.js'
         
    },

    resolve: {
      extensions: ['.ts', '.js']
    },
  
    module: {
      rules: [
        // all files with a `.ts` extension will be handled by `ts-loader`
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "distribution"), // the root for the server
      watchContentBase: true, // so we reload if other stuff like CSS changes
      port: 9000, // it'll now be at http://localhost:9000
    },
    plugins: [
      new WebpackNotifierPlugin({alwaysNotify: true}),
    ]
  };

  