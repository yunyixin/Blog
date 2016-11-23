
// webpack plugins
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const definePlugin = require('webpack/lib/DefinePlugin');

/*const devFlagPlugin = new webpack.DefinePlugin({
  _DEV_: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});*/

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets=..','eslint-loader']
      },
      /*{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },*/
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10240&mimetype=image/png'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new definePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      },
      _DEV_: process.env.DEBUG || false
    }),
    new htmlWebpackPlugin({
      filename: 'index.html'
    }),
    new openBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    /*new LoaderOptionsPlugin({
      options: {
       postcss: function() {
         return [autoprefixer];
       }
      }
    })*/
  ],
  "eslintConfig": {
    "env": {
      "browser": true,
      "node": true
    }
  }
};