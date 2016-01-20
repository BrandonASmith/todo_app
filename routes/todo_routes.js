var express = require('express'),
	todoRouter = express.Router(),
	todosController = require('../controllers/todos_controller.js')

todoRouter.route('/todos')
	.get(todosController.index)
	.post(todosController.create)

// todoRouter.route('/todos/:id')
// 	.put(todosController.update)
// 	.get(todosController.show)
// 	.delete(todosController.destroy)

module.exports = todoRouter