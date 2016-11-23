
// webpack plugins
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const definePlugin = require('webpack/lib/DefinePlugin');
const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const providePlugin = require('webpack/lib/ProvidePlugin');
const path = require('path');

/*const devFlagPlugin = new webpack.DefinePlugin({
 _DEV_: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
 });*/

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: '../src/index.js',
    vendor: ['../src/vendor.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  /*resolve: {
   extensions: ['.js', '.scss', '.json'],
   modules: [path.resolve(__dirname, '../src'), 'node_modules']
   },*/

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader','eslint-loader']
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
    new providePlugin({
      'React': 'react'
    }),
    new htmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../static/index.html'),
      favicon: path.resolve(__dirname, '../static/favicon.jpg')
    }),
    new openBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    new commonsChunkPlugin({
      name: ['app','vendor'],
      minChunks: Infinity
    })
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