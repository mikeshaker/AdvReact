const path = require('path');

const config = {
  entry: [
    'babel-polyfill',
    './lib/components/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/public')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};
module.exports = config;