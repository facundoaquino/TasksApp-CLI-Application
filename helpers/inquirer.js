const inquirer = require('inquirer')
require('colors')

const MENU_OPTIONS = [
	{
		type: 'list',
		name: 'option',
		message: 'Select an option',
		choices: [
			{
				value: '1',
				name: `${'1'.blue} Create Task`,
			},
			{
				value: '2',
				name: `${'2'.blue} List Task`,
			},
			{
				value: '3',
				name: `${'3'.blue} List Completed Task`,
			},
			{
				value: '4',
				name: `${'4'.blue} Task pending`,
			},
			{
				value: '5',
				name: `${'5'.blue} Complete Task`,
			},
			{
				value: '6',
				name: `${'6'.blue} Delete Task`,
			},
			{
				value: '0',
				name: `${'0'.blue} Out`,
			},
		],
	},
]

const inquirerMenu = async () => {
	console.clear()
	console.log('======================='.gray)
	console.log('Select an option'.white.bold)
	console.log('======================='.gray)

	const { option } = await inquirer.prompt(MENU_OPTIONS)

	return option
}

const pause = async () => {
	const question = [{ type: 'input', name: 'enter', message: `Press ${'ENTER'.blue.bold} to continue` }]

	console.log('\n')
	await inquirer.prompt(question)
}

const readInput = async (message) => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message,
			validate(value) {
				if (value.length == 0) {
					return 'Please insert a value'
				}
				return true
			},
		},
	]

	const { desc } = await inquirer.prompt(question)

	return desc
}

module.exports = { inquirerMenu, pause, readInput }
