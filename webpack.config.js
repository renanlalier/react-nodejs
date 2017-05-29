var path = require('path');
var webpack = require("webpack");

module.exports = {

  devtool: 'cheap-module-source-map',

  entry: {
    routes: "./public/js/src/routes/routes.js"
  },

  watch: true,

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js/dist')
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("init"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: false
    })
  ]

};
