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

// function show (req, res) {
// 	Todo.find({_id: req.body.id}, function(err, todo) {
// 		if(err) console.log(err)
// 		res.redirect('/todos')
// 	//this whole action might be wrong
// 	})
// }

function update (req, res) {
	var id = req.params.id;

	Todo.findById({_id: id}, function(err, todo) {
		if(err) console.log(err)

		if(req.body.title) todo.title = req.body.title
		if(req.body.description) todo.description = req.body.description
		if(req.body.priority) todo.priority = req.body.priority
		if(req.body.date) body.priority = req.body.priority

		todo.save(function(err) {
			if(err) console.log(err)
			console.log("succesful update!")
		})

	})
	
}


module.exports = {
	index: index,
	create: create
}