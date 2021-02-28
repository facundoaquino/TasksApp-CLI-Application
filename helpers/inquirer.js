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
				name: '1. Create Task',
			},
			{
				value: '2',
				name: '2. List Task',
			},
			{
				value: '3',
				name: '3. List Completed Task',
			},
			{
				value: '4',
				name: '4. Task pending',
			},
			{
				value: '5',
				name: '5. Complete Task',
			},
			{
				value: '6',
				name: '6. Delete Task',
			},
			{
				value: '0',
				name: '0. Out',
			},
		],
	},
]

const inquirerMenu = async () => {
	console.clear()
	console.log('======================='.gray)
	console.log('Select an option'.blue)
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
            validate(value){
                if(value.length==0){
                    return 'Please insert a value'
                }
                return true
            }
		},
	]

    const {desc} = await inquirer.prompt(question)

    return desc

}

module.exports = { inquirerMenu, pause , readInput }
