const hopp = require('hopp')

// bust hopp cache:
// () => { not a real fn }

exports.lintjs =
  hopp([ 'src/js/*.js' ])
    .eslint({ fix: process.env.NODE_ENV !== 'test' })
    .eslint.format()
    .eslint.failOnError()
    .notify()
    .dest()

exports.lint = exports.lintjs

exports.buildjs =
  hopp([ 'src/js/*.js' ])
    .dest('dist/js')

exports.buildcss =
  hopp([ 'src/css/*.css' ])
    .dest('dist/css')

exports.buildimgs =
  hopp([ 'src/imgs/*' ])
    .dest('dist/imgs')

exports.build =
  hopp.all([
    'buildjs',
    'buildcss',
    'buildimgs'
  ])

exports.default =
  hopp.steps([
    'lint',
    'build'
  ])
