
var math = require('mathjs')
var moment = require('moment')

var timeout = 1000
var simultitaneous = 100
var date1 = moment()
var results = []

for (var i = 0; i < simultitaneous; i++) {
  setTimeout(function () {
    var date2 = moment()
    results.push(date2 - date1)
  }, timeout)
}
setTimeout(function () {
  console.log('node\t|setTimeout\t| Average delay between expected and real timeout is ' + (math.mean(results) - timeout) + 'ms')
}, timeout + 100)
