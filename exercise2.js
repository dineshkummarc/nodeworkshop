var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end("<h1>Boom</h1> <p>I'm learning node</p>");
}).listen(1337, '127.0.0.1');
