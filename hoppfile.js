const hopp = require('hopp')

exports.js =
  hopp([ 'src/js/*.js' ])
    .eslint({ fix: process.env.NODE_ENV !== 'test' })
    .eslint.format()
    .eslint.failOnError()
    .notify()
    .dest()

exports.default =
  hopp.all([
    'js'
  ])
