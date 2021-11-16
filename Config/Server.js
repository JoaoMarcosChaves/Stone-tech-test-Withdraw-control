
const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./Cors')
let MainRoutes = require('./MainRoutes')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(MainRoutes)

server.listen(3000, function(){
	console.log('Server online on 3000')
})

module.exports = server