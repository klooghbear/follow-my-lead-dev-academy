const express = require('express');
const server = express();
const path = require('path');

const dogRoute = require('./routes/dogRoute');
const ownerRoute = require('./routes/ownerRoute');
const walkerRoute = require('./routes/walkerRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

server.use(express.json());
server.use(express.static(path.join(__dirname, './public')));

server.use('/dogs', dogRoute);
server.use('/owners', ownerRoute);
server.use('/walkers', walkerRoute);
server.use('/users', userRoute);
server.use('/api', authRoute);

module.exports = server;
