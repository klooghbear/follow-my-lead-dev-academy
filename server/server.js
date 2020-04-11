const express = require('express')
const server = express()
const path = require('path')

const dogRoute = require('./routes/dogRoute')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/dogs', dogRoute)

module.exports = server
