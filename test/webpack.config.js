const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', 'nodelist-foreach-polyfill', './src/js/polyfill/closest.js', './src/js/app.js', './src/ts/app.ts'],
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'assets/js')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.jsx?$/, /src\/ts/],
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { 
            modules: false,
            useBuiltIns: 'usage'
          }]]
        },
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  }
};
