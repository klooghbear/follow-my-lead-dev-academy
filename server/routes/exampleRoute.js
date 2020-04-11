const express = require('express')

const db = require('../db/example')
const router = express.Router()

router.get('./', (req, res) => {
  db.getExample().then(id => {
    res.json(id)
  })
})

module.exports = router