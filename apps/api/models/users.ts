const dbconnect = require('../config')

exports.createUsers = async (name, email, password) => {
	try {
		const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`
		const result = await dbconnect.query(query)

		const resultusers = {
			name,
			email
		}

		return resultusers
	} catch (error) {
		console.error('Error creating user:', error)
		throw new Error('Error creating user')
	}
}
