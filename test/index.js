
var path = require('path')
var exec = require('child_process').exec
exec('node ' + path.join(__dirname, 'node/setTimeout/index.js'), function (err, stdout) {
  if (err) {
    console.log(err)
  }
  console.log(stdout)
})
exec('node ' + path.join(__dirname, 'node/nanotimer/index.js'), function (err, stdout) {
  if (err) {
    console.log(err)
  }
  console.log(stdout)
})
exec('python ' + path.join(__dirname, 'python/timer.py'), function (err, stdout) {
  if (err) {
    console.log(err)
  }
  console.log(stdout)
})
