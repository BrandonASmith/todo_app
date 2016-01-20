var express 	= require('express'),
	path 		= require('path'),
	logger 		= require('morgan'),
	bodyParser  = require('body-parser'),
	app 		= express(),
	mongoose	= require('mongoose'),
	port 		= process.env.PORT || 3000,
	mongoUri 	= process.env.MONGOLAB_URI || 'mongodb://localhost/todo_app',
	todoRouter  = require('./routes/todo_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', require ('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

mongoose.connect(mongoUri)

app.use('/', todoRouter)

app.listen(port)
console.log('The server is running on port' + port)