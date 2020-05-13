const express = require('express');
const router = express.Router();
const db = require('../db/userData');

router.get('/:id', (req, res) => {
  let id = req.params.id;
  db.getUserDetails(id)
    .then((response) => res.json(response))
    .catch((err) => {
      console.log(err);
      res.status(500).json({});
    });
});

module.exports = router;
