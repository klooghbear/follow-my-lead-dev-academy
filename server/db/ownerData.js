const connection = require('./connection')

const getOwners = (db = connection) => {
  return db('owner_table')
}

module.exports = {
  getOwners
}