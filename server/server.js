const express = require('express')
const server = express()
const path = require('path')

//Instantiate route locations as variables here
//example: const userRoute = require('./routes/filename')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

//export routes through api url
//example: server.use('/users', userRoute)

module.exports = server
