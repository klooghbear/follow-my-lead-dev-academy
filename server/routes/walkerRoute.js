const express = require('express');
const router = express.Router();
const db = require('../db/walkerData');

router.get('/', (req, res) => {
  db.getWalker()
    .then((walker) => res.json(walker))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Message: 'Something is broken' });
    });
});

module.exports = router