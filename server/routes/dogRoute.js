const express = require('express');

const db = require('../db/dogDb');
const router = express.Router();

router.get('/', (req, res) => {
  db.getDogs()
    .then((dogs) => {
      console.log(dogs);
      res.json(dogs);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Something is broken' });
    });
});

module.exports = router;
