const hopp = require('hopp')

exports.lintjs =
  hopp([ 'src/js/*.js' ])
    .eslint({ fix: process.env.NODE_ENV !== 'test' })
    .eslint.format()
    .eslint.failOnError()
    .notify()
    .dest()

exports.lint =
  hopp.all([
    'lintjs'
  ])

exports.default =
  hopp.all([
    'lint'
  ])
