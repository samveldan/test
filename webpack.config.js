const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')

module.exports = {
    target : "web",
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: './',
        clean: true,
    },
    devServer : {
      static: {
          directory: path.join(__dirname, 'dist'),
        },
      port : 3000,
      open: true,
      hot: true,
      compress: true
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new miniCss({
            filename: 'style.css',
         }),
        new CopyPlugin({
          patterns: [
            { from: "./src/assets", to: "../dist/assets/" },
          ],
        }),
    ],
    module: {
      rules: [
        {
          test: /\.(sass|scss|css)$/i,
          use: [
            miniCss.loader, 
            'css-loader', 
            'postcss-loader', 
            'sass-loader'],
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        }
      ],
    },
  };