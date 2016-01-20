var express 	= require('express'),
	path 		= require('path'),
	logger 		= require('morgan'),
	bodyParser  = require('body-parser'),
	app 		= express(),
	mongoose	= require('mongoose'),
	port 		= process.env.PORT || 3000,
	todoRouter  = ('./routes/todo_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', todoRouter)

app.listen(port)
console.log('The server is running on port' + port)