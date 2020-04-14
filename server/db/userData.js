const connection = require('./connection');
const { generateHash } = require('authenticare/server');

const createUser = (user, db = connection) => {
  return userExists(user.username, db)
    .then((exists) => {
      if (exists) {
        return Promise.reject(new Error('User exists'));
      }
    })
    .then(() => generateHash(user.password))
    .then((passwordHash) => {
      return db('user_table').insert({
        username: user.username,
        hash: passwordHash,
      });
    });
};

module.exports = {
  createUser,
  getUserByName,
};
