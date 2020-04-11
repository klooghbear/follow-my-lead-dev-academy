//environment set up 
require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, function() {
  //eslint-disable-next-line no-console
  console.log('WHOOP! Listening on port', port)
})