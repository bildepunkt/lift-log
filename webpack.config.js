const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/index.tsx"]
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [ ".js", ".json", ".jsx", ".tsx", ".ts" ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
