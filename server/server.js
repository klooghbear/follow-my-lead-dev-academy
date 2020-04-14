const express = require('express')
const server = express()
const path = require('path')

const dogRoute = require('./routes/dogRoute')
const ownerRoute = require('./routes/ownerRoute')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/dogs', dogRoute)
server.use('/owners', ownerRoute)

module.exports = server
