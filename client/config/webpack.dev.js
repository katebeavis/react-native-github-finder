const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:4444',
      '/graphql': 'http://localhost:4444',
    },
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
});
