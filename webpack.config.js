/* eslint-disable */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
