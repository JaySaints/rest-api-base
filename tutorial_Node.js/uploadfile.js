const formidable = require('formidable');
const http = require('http');


http.createServer((req,res) => {
  if (req.url == '/formidable'){
    var from = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      res.write('File uploaded');
      res.end();
    });
  }
  else{
    // This section will produce an HTML form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
