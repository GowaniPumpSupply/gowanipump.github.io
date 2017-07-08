const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/js/index.js'],
    vendor: ['./src/js/vendor.js']
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist/js`
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
