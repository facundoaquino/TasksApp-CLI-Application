const Task = require('./Task')

class Tasks {
	get tasksToArray() {
		const tasks = []

		Object.keys(this._all).forEach((key) => {
			const tsk = this._all[key]

			tasks.push(tsk)
		})

		return tasks
	}

	constructor() {
		this._all = {}
	}

	saveTasksFromArray(tasks = []) {
		tasks.forEach((task) => {
			this._all[task.id] = task
		})
	}

	createTask(description = '') {
		const task = new Task(description)

		this._all[task.id] = task
	}
}

module.exports = Tasks
