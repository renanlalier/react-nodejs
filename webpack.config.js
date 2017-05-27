var path = require('path');
var webpack = require("webpack");

module.exports = {

  entry: {
    routes: "./public/js/src/routes/routes.js"
  },

  watch: true,

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js/dist')
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("init")
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['react']
      }
    },{
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
  }
};
