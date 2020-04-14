const express = require('express');

const db = require('../db/ownerData');
const router = express.Router();

router.get('/', (req, res) => {
  db.getOwners()
    .then((owner) => res.json(owner))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Something is broken' });
    });
});

module.exports = router;
