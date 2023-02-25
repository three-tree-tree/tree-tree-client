// const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  // exclude: /node_modules/,
  output: {
    filename: "bundle.js",
    // path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
};
