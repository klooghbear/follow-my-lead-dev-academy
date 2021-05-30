const express = require("express")
const db = require("../db/userData")

const router = express.Router()

router.get("/:id", (req, res) => {
  const id = req.params.id
  db.getUserDetails(id)
      .then((response) => res.json(response))
      .catch((err) => {
        console.log(err)
        res.status(500).json({})
      })
})

module.exports = router
