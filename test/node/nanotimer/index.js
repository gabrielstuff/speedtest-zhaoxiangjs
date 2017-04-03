var NanoTimer = require('nanotimer')
var math = require('mathjs')

var timeout = 2000
var multitaneous = 100
var date1 = new Date().getTime()
var results = []

for (var i = 0; i < multitaneous; i++) {
  clearTimeout(timerObject)
  var timerObject = new NanoTimer()
  timerObject.setTimeout(function () {
    var date2 = new Date().getTime()
    results.push(date2 - date1)
    var mean = math.mean(results)
    mean++
    mean/=2
  }, [timerObject], timeout * 1000 + 'u')
}
setTimeout(function () {
  console.log('node\t|NanoTimer\t| Average delay between expected and real timeout is ' + (math.mean(results) - timeout) + 'ms')
}, timeout + 100)
