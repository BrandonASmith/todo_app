var Todo = require('../models/todo.js')

function index (req, res) {
	Todo.find({}, function(err, todos) {
		if (err) console.log(err)
			res.render('layout', {todos: todos})
	})
}

function create (req, res, next) {
	var todo = new Todo ()
	todo.title = req.body.title
	todo.description = req.body.description
	todo.priority = req.body.priority
	todo.date = req.body.date

	todo.save(function (err, todo, count) {
		if(err) console.log(err)
		res.redirect('/todos')
	})
}

function show (req, res) {
	Todo.find({_id: req.body.id}, function(err, todo) {
		if(err) console.log(err)
		res.redirect('/todos/:id')
	//this whole action might be wrong
	})
}

function update (req, res) {
	Todo.findOneAndUpdate({title: req.body.title}, {description: req.body.description}, {priority: req.body.priority}, {date: req.body.date}, function (err, todo) {
		if(err) console.log(err)
		res.redirect('/todos')
	//this whole action might be wrong
	} 
}


module.exports = {
	index: index,
	create: create
}