const Task = require('./Task')

class Tasks {
	constructor() {
		this._all = {}
	}

	createTask(description = '') {
		const task = new Task(description)
		
		this._all[task.id] = task
		
	}


}

module.exports = Tasks
