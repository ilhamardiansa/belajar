const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const UserController = require('../controller/users')

app.post('/', UserController.signup)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
