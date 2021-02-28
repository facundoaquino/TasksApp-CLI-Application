const Task = require('./Task')
require('colors')
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

	allTasks() {
		console.log()
		const tasks = this.tasksToArray
		tasks.forEach((task, inx) => {
			const count = `${inx + 1}.`
			console.log(`${count.blue}  ${task.description} : ${task.completed ? 'Completed' : 'Uncomplete'.red}  `)
		})
	}

	filterCompleted(completed = true) {
		const tasks = this.tasksToArray
		const tasksFiltered = tasks.filter((task) => (completed ? task.completed : !task.completed))
		// console.log(tasksFiltered)
		tasksFiltered.forEach((task, inx) => {
			const count = `${inx + 1}.`
			console.log(`${count.blue}  ${task.description} : ${task.completed ? (task.completed).blue : 'Uncomplete'.red}  `)
		})
	}

	deleteTask = (id) => {
		if (this._all[id]) {
			delete this._all[id]
		}
	}

	toogleCompleted(ids = []) {
		ids.forEach((id) => {
			const task = this._all[id]
			if (!task.completed) {
				task.completed = new Date().toISOString()
			}
		})

		this.tasksToArray.forEach(task=>{
			if(!ids.includes(task.id)){
				this._all[task.id].completed=null
			}
		})

	}


}

module.exports = Tasks
