
var path = require('path')
var exec = require('child_process').exec

function logger(err, stdout) {
  if (err) {
    console.error(err)
  }
  console.log(stdout)
}

exec('node ' + path.join(__dirname, 'node/setTimeout/index.js'), logger)
exec('node ' + path.join(__dirname, 'node/nanotimer/index.js'), logger)
exec('node ' + path.join(__dirname, 'node/mano/index.js'), logger)
exec('python ' + path.join(__dirname, 'python/timer.py'), logger)
exec('g++ -std=c++11 -lpthread '
    + path.join(__dirname, 'cpp/timer.cpp')
    + "-o " + path.join(__dirname, 'cpp/timer'), logger)
exec(path.join(__dirname, 'python/timer'), logger)
