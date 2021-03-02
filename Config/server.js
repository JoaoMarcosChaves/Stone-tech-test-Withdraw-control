const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('cors')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(3000, function(){
	console.log('Server rodando na porta 3000')
})

module.exports = server