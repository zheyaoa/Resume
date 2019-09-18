const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./index.js"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "docs")
  },
  devServer: {
    contentBase: "./docs"
  },
  module:{
    rules: [
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot?t|woff|woff2|eot|ttf|png|svg|jpeg|gif)$/,
        use: [
          'file-loader'
          ]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Rusume by zheyao",
      template: './template/index.html'
    })
  ]
};
