'use strict'

const cluster = require('cluster')
const clusterNbr = 1
var math = require('mathjs')
var timeout = 1000
var simultitaneous = 100
var date1 = new Date().getTime()
var results = []
var worker

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)
  worker = cluster.fork()
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  for (var i = 0; i < simultitaneous; i++) {
    setTimeout(function () {
      var date2 = new Date().getTime()
      results.push(date2 - date1)
    }, timeout)
  }
  setTimeout(function () {
    console.log('cluster\t|setTimeout\t| Average delay between expected and real timeout is ' + (math.mean(results) - timeout) + 'ms')
  }, timeout + 100)

  console.log(`Worker ${process.pid} started`)
}
