var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end("<h1>Hello</h1> <p>I'm learning node using " + req.headers['user-agent'] + "</p>");
	console.log('wurd')
}).listen(1337, '127.0.0.1');
