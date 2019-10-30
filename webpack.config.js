const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
              loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
          },
          {
              loader: 'file-loader?name=./assets/fonts/Lato/[name].[ext]'
          },
          {
              loader: 'file-loader?name=./assets/fonts/YesevaOne/[name].[ext]'
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader?name=./assets/images/[name].[ext]'
          },
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};