var http = require('http');

var server = http.createServer(function(request,responce){
    responce.writeHead(200,{"Content-Type":"text/plain"});
    responce.end("Hello World\n")
});

server.listen(7000);