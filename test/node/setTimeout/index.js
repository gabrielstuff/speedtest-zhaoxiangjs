//http://stackoverflow.com/questions/18317717/node-js-settimeout-resolution-is-very-low-and-unstable
var math = require('mathjs')

var timeout = 2000
var simultitaneous = 100
var date1 = new Date().getTime()
var results = []

for (var i = 0; i < simultitaneous; i++) {
  setTimeout(function () {
    var date2 = new Date().getTime()
    results.push(date2 - date1)
    var mean = math.mean(results)
    mean++
    mean/=2
  }, timeout)
}
setTimeout(function () {
  console.log('node\t|setTimeout\t| Average delay between expected and real timeout is ' + (math.mean(results) - timeout) + 'ms')
}, timeout + 100)
