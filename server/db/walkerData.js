const connection = require('./connection')

const getWalker = (db = connection) => {
  return db('walker_table')
}

module.exports = {
  getWalker
}