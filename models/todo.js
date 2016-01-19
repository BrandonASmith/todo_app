var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
	title, String,
	description: String,
	priority: Number,
	date: Date
})

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;