const fs = require('fs');
/*
// Only execute if the file exists
const rs = fs.createReadStream('./eventfile.txt');
rs.on('open', () => {
  console.log('The file is open!');
});
*/

const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create a event handler
var myEvent = () => {
  console.log('I hear a scream!');
}

// Assign the myEvent to an event
eventEmitter.on('scream', myEvent);

// Fire the 'scream' event
eventEmitter.emit('scream');
