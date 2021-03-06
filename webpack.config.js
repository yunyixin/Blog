// webpack plugins
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const definePlugin = require('webpack/lib/DefinePlugin');
const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const providePlugin = require('webpack/lib/ProvidePlugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

/*const devFlagPlugin = new webpack.DefinePlugin({
 _DEV_: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
 });*/

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: './src/index.js',
    vendor: ['./src/vendor.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.scss', '.json'],
    modules: ['node_modules', 'src']
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      /* {
       test: /\.css$/,
       use: 'style-loader!css-loader!postcss-loader'
       },*/
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=10240&mimetype=image/png'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer];
              }
            }
          },
          'sass-loader']
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
      template: path.resolve(__dirname, './static/index.html'),
      favicon: path.resolve(__dirname, './static/favicon.jpg')
    }),
    new openBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    new commonsChunkPlugin({
      name: ['app', 'vendor'],
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

  /* "eslintConfig": {
   "env": {
   "browser": true,
   "node": true
   }
   }*/

};