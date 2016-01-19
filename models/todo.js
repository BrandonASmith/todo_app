var mongoose = require('mongoose')

var toDoSchema = new mongoose.Schema({
	title, String,
	description: String,
	priority: Number,
	date: Date
})