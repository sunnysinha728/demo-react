// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'inline-source-map',
  cache: false,
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path:path.resolve(__dirname, "dist"),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
  //  watch: true,
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: { loader: 'babel-loader'}
            },
            { 
              test: /\.css?$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
              ]
            },
            {
              test: /\.scss$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
              ]
            },
          ]
      },
      devServer: {
        watchFiles: "./src/index.html",
        hot: true,
        port:3000
    },
};