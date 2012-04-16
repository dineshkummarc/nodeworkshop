var http = require("http");

var options = {
    host: 'www.nytimes.com',
    port: 80,
    path: '/'
};
http.get(options, function(res) {
    res.setEncoding('utf8')
    var data = ''
    /*
    Magic moment - the request is an object that we can use
    to add callbacks and stuff.
    */
    res.on("data", function(d){
        console.log(d);
    });
  console.log("Got response:" + res);
});