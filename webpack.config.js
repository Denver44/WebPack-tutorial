const path = require("path");

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
        use: ["style-loader", "css-loader"], // order must be same
        test: /\.css$/i,
      },
    ],
  },
};

module.exports = config;
