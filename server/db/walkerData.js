const connection = require('./connection');

const getWalkers = (db = connection) => {
  return db('walker_table');
};

const getWalker = (id, db = connection) => {
  return db('walker_table').where({id: id}).first();
};

const addWalker = (walker, db = connection) => {
  return db('walker_table').insert(walker).debug();
};

const getUserByName = (username, db = connection) => {
  return db('user_table').select().where('username', username).first();
};

module.exports = {
  getWalker,
  getWalkers,
  addWalker,
  getUserByName,
};
