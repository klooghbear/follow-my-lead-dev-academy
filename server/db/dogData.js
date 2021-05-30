const connection = require("./connection")

const getDogs = (db = connection) => {
  return db("dog_table").select()
}

module.exports = {
  getDogs,
}
