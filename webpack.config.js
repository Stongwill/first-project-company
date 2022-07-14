"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
process.env.NODE_ENV === "production" && (mode = "production");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: mode,
  entry: {
   main: "./index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: "3000"
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./index.html"}),
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c).ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/i,
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/i,
      },
    ],
  },
};
