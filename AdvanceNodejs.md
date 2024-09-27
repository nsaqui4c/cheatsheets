## Flow of each node program execution
```js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening to port) networking task. No thread pool require. delegate work to OS layer
  // Check three: Any pending long running operations? (Like fs module). Thread pools are included.
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions
  // are ready to be called.  setTimeout, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations
  // and calls relevant callbacks
  // 3) Pause execution. Continue when...
  //  - a new pendingOSTask is done
  //  - a new pendingOperation is done
  //  - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}

// exit back to terminal

```

## Playing with thread pool
* By default node has 4 threads
* These threads get assigned to cpu core by os scheduling
* if cpu has 2 cores then each core will have 2 thread assigned
* thread helps to execute commands concurrently, but core can work on one thred at a time
* multithreading or hyperthreading is  nothing but working on multiple thread concurrently
* Let say each thread will take 1 sec to complete and core has 2 thread assigned, then core will complete both thread at around same time after 2 sec
* 1 sec for each process.
```js
process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});
```

## delegating to OS layer
* Network related task are delegated to OS layer. No thread pool is involved in this
* No matter how many process we throw here all of them will complete in same time, and will not wait for other to complete.
* That is no waiting for thread to complete to assign new tak to freed thread.
```js
const https = require('https');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
```

## Combination of os and operation task
* In below code network call will execute first as no dependency on thread pool
* since there is only 4 thread pool and 4 process read and 3 hash will get the thread first
* While process is reading the data from HD thread in free, so it will take fourth hash
* since, FS thread for few second its counterpart hash will get more cpu time and hence will get completed
* then fs will get freed thread, and then since fs has just has to print, no calculation required, it will get completed.
* and then three hashes.

* In case there is only one thread, then first fs will get completed, because of less work, then network and then 4 hashes
```js
process.env.UV_THREADPOOL_SIZE = 4;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start);
  });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
```
## Improving Node performance
#### Cluster in nodejs
* Nodejs is by default dingle threaded.i.e it process will have one thread and that thread will have one event loop
* If we have cpu intensive task running in server, then all the requests will be blocked
* we can fork multiple instance of node process using cluster.
* efficeinecy wise it will be better to have fork limited number of core.
```js
process.env.UV_THREADPOOL_SIZE=2
const cluster = require('cluster')
if (cluster.isMaster){
cluster.fork()
cluster.fork()
}
else{
  const express = require('express')
  const crypto = require('crypto')
  const app = express()
  app,get('/',(req.res)=>{
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => { //high compuatational task
    res.send('Hi There')
  })
  app.listen(3000)
}
```
**We Use pm2 to maintailn multiple cluster in prod**
* pm2 start index.js -i 0
  * -i 2 for 2 cluster
  * -i 0 will check and create suitable number of cluster automatically

#### Worker threads
![image](https://github.com/nsaqui4c/cheatsheets/assets/45531263/f71206d9-cd93-4021-94da-bc348de83bbd)


## Event loop

In Node.js (and browsers), JavaScript runs in a single thread. This means only one piece of code is executed at a time. The event loop is the mechanism that decides what to run next, ensuring that tasks like handling I/O or timers don’t block other code from running.

	•	The event loop constantly checks the **call stack** to see if it’s empty.
	•	If it’s empty, it looks at the **task queue** (also known as callback queue) to execute any pending tasks (like a completed I/O operation).
	•	If the task queue is empty, it checks the **microtask queue** for tasks that need to be handled immediately (like promise resolutions).


The call stack is where JavaScript keeps track of what functions are currently running. Whenever a function is called, it’s pushed onto the stack. When the function finishes, it’s popped off.

When you use asynchronous operations like setTimeout, fetch, or any I/O operation, the callback is placed in the Task Queue. The event loop picks up these callbacks once the call stack is empty.

Promises use the Microtask Queue, which is processed immediately after the current function execution completes and before the next task from the Task Queue.
Node.js has a special API, process.nextTick, which schedules callbacks to run before anything in the Microtask Queue. This gives it a higher priority over promises.

```js
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
}).then(() => {
  console.log('Promise 2');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('End');
```
	1.	“Start” is printed.
	2.	setTimeout is scheduled in the Task Queue.
	3.	Promise .then() callbacks are scheduled in the Microtask Queue.
	4.	process.nextTick() is scheduled with higher priority than even the Microtask Queue.
	5.	“End” is printed.
	6.	process.nextTick runs, printing “nextTick”.
	7.	The first Promise handler runs, printing “Promise 1”, followed by the second Promise handler, printing “Promise 2”.
	8.	Finally, setTimeout runs, printing “setTimeout”.

 
