const express = require("express")
const { getTokenDecoder } = require("authenticare/server")
const db = require("../db/userData")

const router = express.Router()

router.get("/:id", getTokenDecoder(), (req, res) => {
  const id = req.params.id
  db.getUserDetails(id)
      .then((response) => res.json(response))
      .catch((err) => {
        console.log(err)
        res.status(500).json({})
      })
})

module.exports = router
