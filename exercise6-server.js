var http = require('http');

var s = http.createServer()

s.on('request', function(req, res){
    req.setEncoding('utf8')
    req.on('data', function(d){
        console.log(d)
    })
    req.on('end', function(){
        res.end()
    })
})
s.listen(1337)


