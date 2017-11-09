"use strict";

const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: ["./js/containerDetailView.js",
          "./js/onSubmit.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "build.js"
  },

  watch: false,

  watchOptions: {
    aggregateTimeout: 300
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin({
      include: "./public/build.js"
    })
  ],
};

