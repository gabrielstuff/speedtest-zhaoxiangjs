from threading import Timer
import datetime

timeout = 2000
simultitaneous = 100
results = []

def timeFinished(arg1, arg2):
    global results
    #results.append(datetime.datetime.now() - arg1 - timeout/1000.0)
    results.append((datetime.datetime.now() - arg1 - datetime.timedelta(milliseconds=timeout)).total_seconds())
    k = (sum(results) / float(len(results))*1000)

def allFinished():
    global results
    print 'python\t|timer\t| Average delay between expected and real timeout is ' + str((sum(results) / float(len(results))*1000)) + 'ms'
    #print (sum(results) / float(len(results))*1000)

#arguments: 
#how long to wait (in seconds), 
#what function to call, 
#what gets passed in
for i in range(0, simultitaneous):
  r = Timer(timeout/1000.0, timeFinished, (datetime.datetime.now(), "arg2"))
  r.start()
s = Timer(timeout/1000.0+ 0.5, allFinished)

s.start()
