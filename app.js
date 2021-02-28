// const { showMenu, pause } = require('./helpers/messagges')

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const { saveDb, readDb } = require('./helpers/saveFile')
const Tasks = require('./models/Tasks')

require('colors')

const main = async () => {
	let opt = ''

	const tasks = new Tasks()

	const tasksDb = readDb()

	if (tasksDb) {
		console.log('que onda perriquete')
		tasks.saveTasksFromArray(tasksDb)
	}

	do {
		opt = await inquirerMenu()

		switch (opt) {
			case '1':
				const description = await readInput('Description: ')

				tasks.createTask(description)
				// console.log(description)
				break
			case '2':
				// console.log(tasks.tasksToArray)

				tasks.allTasks()

				break

			case '3':
                tasks.filterCompleted(true)
				break
			case '4':
                tasks.filterCompleted(false)

				break
		}

		saveDb(tasks.tasksToArray)

		await pause()
	} while (opt != 0)
}

main()
