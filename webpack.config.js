const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader",
        }),
        // use: ["style-loader", "css-loader"], // order must be same
      },
    ],
  },
  plugins: [new ExtractTextPlugin("style.css")],
};

module.exports = config;
