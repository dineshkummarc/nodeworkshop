var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log(req)
    var ua = req.headers['user-agent'];
    
    var msg = "Hello unknown";
    
    console.log(ua)
    
    if (ua.indexOf("Windows") >= 0){
        msg  = "Hello Microsoft user";
    }
    if (ua.indexOf("Safari") >= 0){
        msg  = "Hello apple browsers person";
    }
    if (ua.indexOf("Opera") >= 0){
        msg  = "Hello opera browsers person";
    }
    
    res.end("<h1>Hello</h1> <p>I'm learning node</p> <p> " + msg + "</p>");

}).listen(1337, '127.0.0.1');
