'use strict'

var timeout = 2000 * 1e6
var math = require('mathjs')

var simultitaneous = 100
var results = []

function count (cb, duration, startTime) {
  var diff = process.hrtime(startTime)
  if (diff[0] * 1e9 + diff[1] >= duration) {
    //console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`)
    typeof cb === 'function' && cb()
  } else {
    process.nextTick(() => {
      count(cb, duration, startTime)
      //console.log(`rrr: ${duration}, start: ${startTime}`)
    })
  }
}

var date1 = new Date().getTime()

for (var i = 0; i < simultitaneous; i++) {
  count(function () {
    var date2 = new Date().getTime()
    results.push(date2 - date1)
    //console.log(math.mean(results))
  }, timeout, process.hrtime())
}

setTimeout(function () {
  console.log('node\t|nextTick\t| Average delay between expected and real timeout is ' + (math.mean(results) - timeout/1e6) + 'ms')
}, timeout/1e6 + 100)