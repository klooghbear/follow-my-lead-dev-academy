const connection = require('./connection');

function getDogs(db = connection) {
  return db('dog_table').select();
}

module.exports = {
  getDogs,
};
