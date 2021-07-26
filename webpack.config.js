const webpack = require("webpack");
const path = require("path");

module.exports = {
  target: "web",

  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: ["babel-loader"],
      // },
    ],
  },
  resolve: {
    extensions: [".*", ".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    publicPath: '/dist/',

    compress: true,
  },
};