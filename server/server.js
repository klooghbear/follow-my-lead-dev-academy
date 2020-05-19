const express = require('express');
const server = express();
const path = require('path');

const dogRoute = require('./routes/dogRoute');
const ownerRoute = require('./routes/ownerRoute');
const walkerRoute = require('./routes/walkerRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

// server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(path.join(__dirname, './public')));

server.use('/api/dogs', dogRoute);
server.use('/api/owners', ownerRoute);
server.use('/api/walker', walkerRoute);
server.use('/api/users', userRoute);
server.use('/api', authRoute);

module.exports = server;
