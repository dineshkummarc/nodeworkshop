var http = require('http');


var options = {
    host: '127.0.0.1',
    port: 1337,
    path: '/',
    method: 'POST'
}

request = http.request(options, function(response){
    // empty
})


request.write('asdasdsadsa')
request.write('asdasdsadsa');
request.write('asdasdsadsa');
request.write('asdasdsadsa');
request.write('asdasdsadsa');
request.write('asdasdsadsa');
request.write('asdasdsadsa');
request.end()

//client.get(options, function(response){
//    console.log(response);
//});



