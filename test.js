var swc = require('./');

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
