const express = require("express")

const db = require("../db/dogData")

const router = express.Router()

router.get("/", (req, res) => {
  db.getDogs()
      .then((dogs) => res.json(dogs))
      .catch((err) => {
        console.error(err)
        res.status(500).json({ message: "Something is broken" })
      })
})

module.exports = router
