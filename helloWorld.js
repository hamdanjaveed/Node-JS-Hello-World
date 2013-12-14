var http = require("http");

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!\n");
    console.log("CONNECTED");
});

server.listen(8000, "127.0.0.1");