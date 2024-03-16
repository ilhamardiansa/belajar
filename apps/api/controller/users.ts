const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

module.exports = {
	async signup(req, res) {
		try {
			const { name, email, password } = req.body

			if (!name || !email || !password) {
				return res.status(400).json({
					error: 'Name, email, and password are required'
				})
			}

			const hashedPassword = bcrypt.hashSync(password, 8)
			const user = await User.createUsers(name, email, hashedPassword)

			return res.status(201).json(user)
		} catch (error) {
			console.error('Error signing up:', error)
			return res.status(500).json({ error: 'Internal server error' })
		}
	}
}
