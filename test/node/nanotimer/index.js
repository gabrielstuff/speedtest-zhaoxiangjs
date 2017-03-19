var NanoTimer = require('nanotimer')
var math = require('mathjs')
var moment = require('moment')

var timeout = 1000
var multitaneous = 100
var date1 = moment()
var results = []

for (var i = 0; i < multitaneous; i++) {
  var timerObject = new NanoTimer()
  timerObject.setTimeout(function () {
    var date2 = moment()
    results.push(date2 - date1)
  }, [timerObject], timeout * 1000 + 'u')
}
setTimeout(function () {
  console.log('node\t|NanoTimer\t| Average delay between expected and real timeout is ' + (math.mean(results) - timeout) + 'ms')
}, timeout + 100)
