const http = require('http');
const url = require('url');
const fs = require('fs');

// Create server object
http.createServer((req, res) => {
  var q = url.parse(req.url, true); // Get the url client
  var filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    // If page not exists Set the response '404 - Page Not Found'
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
