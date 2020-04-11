const connection = require('./connection')

function getExample (db = connection) {
    return db('some_table').select()
}

module.exports = {
  getExample
}
