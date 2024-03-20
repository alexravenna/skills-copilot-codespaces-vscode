// Create web server
// Create a web server that listens on port 3000 and serves the file comments.js.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/javascript'
  });
  fs.createReadStream(process.argv[3]).pipe(response);
});
server.listen(Number(process.argv[2]));
