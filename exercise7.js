var express = require('express')
var app = express.createServer()
app.use(express.cookieParser())

//app.set('view engine', 'jade')

app.get('/', function(req, res){
	res.render('index')
})

app.get('/somewhere', function(req, res){
	res.send('Hello, you\'re now somewhere')
})

app.get('/blog/:slug', function(req, res){
	res.send('reading ' + req.params.slug)
})

app.get('/bing', function(req, res){
	res.redirect('/bong')
})

app.get('/bong', function(req, res){
	res.send('You wanted bing, but I wanted bong')
})

app.get('/cookie', function(req, res){
	res.cookie('rememberme', 'yes', { maxAge: 900000 })
	console.log(req.cookies.rememberme)
	res.send('cookie has been dropped')
})

app.listen(3000)