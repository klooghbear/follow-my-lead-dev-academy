const express = require('express')

const db = require('../db/dogDb')
const router = express.Router()

router.get('/', (req, res) => {
  db.getDogs().then(dogs => {
    console.log(dogs)
    return res.json(dogs)
  })
})

module.exports = router
