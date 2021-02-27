const { v4: uuidv4 } = require('uuid')



class Task {
	constructor(description) {
		this.description = description
        this.id = uuidv4()
        this.completed = null
	}
}

module.exports = Task
