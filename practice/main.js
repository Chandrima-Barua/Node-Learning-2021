var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {
    response.end('Hello Node!')
});

server.listen(5050);
console.log("Server run successful")