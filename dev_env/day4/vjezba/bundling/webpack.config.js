const path = require('path');
const webpack = require("webpack"); 

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      Handlebars: 'handlebars/dist/cjs/handlebars'
    })
  ]
};