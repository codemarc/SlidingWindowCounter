# Sliding Window Counter
This is a counter which keeps track of the number of events have occurred in a given window of time.
An __event__ is a stateless record of occurrance at a given moment in time.

We want to know how many events have occurred in the last:
- second
- minute
- hour


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
