# Sliding Window Counter
This is a counter which keeps track of the number of events have occurred in a given window of time.
An __event__ is a stateless record of occurrance at a given moment in time.

Sliding windows have a fixed known size.  We want to know how many events have 
occurred in:  
| Window      | Scope          | Size |
| ----------- | -------------- | -----|
| Last second | millisecond    | 1000 |
| Last minute | second         | 60   |
| Last hour   | minutes        | 60   |


_This illustration is taken from eep-js_

``` text
Sliding window of size 2 ticks computing, counting occurances.

     t0     t1      (emit)   t2             (emit)       tN
   +---+  +---+---+          -...-...-
   | 4 |  | 2 | 4 |   <6>    : x : x :
   +---+  +---+---+          _...+---+---+               ...
              | 2 |              | 2 | 1 |    <3>
              +---+              +---+---+
                                     | 2 |
                                     +---+
```
Logically, we only ever need N active elements to emit a result for every 
input event once all windows are open. 
## Usage - standard

``` js
var swc = require('SlidingWindowCounter');

// Report events every second...
setInterval( () => { 
  console.log({'Last': {
      'Second':   swc.numLastSecond()
    , 'Minute':   swc.numLastMinute()
    , 'Hour':     swc.numLastHour()
  }});
  
}, 1000);

// Add event occurrances at a random interval 0 - 1000
setInterval( () => { 
  swc.increment();
}, Math.floor(Math.random() * 1000));

```

# Test 
To test this code you need a recent version of node installed.

``` code
bash-3.2$ npm run test
```

Alternatively you of you have docker installed you can:
``` code
# build it
bash-3.2$ docker build -t codemarc/slidewin .
Successfully built a34d58741232

# or pull it
bash-3.2$ docker pull codemarc/slidewin:latest
Status: Image is up to date for codemarc/slidewin:latest

# and run it in a container
bash-3.2$ docker run -it --rm codemarc/slidewin
{ second: 3, minute: 3, hour: 3 }
{ second: 7, minute: 7, hour: 7 }
.
.
.
```
