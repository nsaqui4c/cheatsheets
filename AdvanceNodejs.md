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
