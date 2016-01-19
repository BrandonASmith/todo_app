var mongoose = require('mongoose'),
	express = require('express'),
	todoRouter = express.Router(),
	bodyParser = require('body-parser')

todoRouter.route('/todos')
	.get(todosController.index)
	.post(todosController.create)

todoRouter.route('/todos/:id')
	.put(todosController.update)
	.get(todosController.show)
	.delete(todosController.destroy)

module.exports = todoRouter