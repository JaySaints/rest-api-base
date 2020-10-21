// Import modules HTTP
const http = require('http');
// Import my own module
var dt = require('./curDate');
// Import module URL
const url = require('url');

// Create a server object
// req = Argument that request from the client
// res = Argument that response from server
http.createServer((req, res) => {

  // Method res.writeHead()
  // First argument is the status code 200 equal OK
  // Second argument is the object containing the response headers
  res.writeHead(200, {'Content-Type': 'text/html'});

  // The object has a property called 'URL' from client
  res.write(req.url);

  console.log('The result is displayed in the Command Line Interface');

  // Write a response to client
  res.write('Hello J@y -> ' + dt.myDateTime());

  // This method split the query string into readable parts
  var q = url.parse(req.url, true).query;
  var txt = q.year + "/" + q.month + "/" + q.day;

  // end the response
  res.end();
}).listen(8080); // set the port on which the server object listens
