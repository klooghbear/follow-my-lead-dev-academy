const express = require('express');
const router = express.Router();
const db = require('../db/walkerData');
const { getTokenDecoder } = require('authenticare/server');

router.get('/', (req, res) => {
  db.getWalkers()
    .then((walker) => res.json(walker))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Message: 'Cannot find walkers' });
    });
});

router.post('/', getTokenDecoder(), (req, res) => {
  const walker = req.body;
  walker.user_id = req.user.id;
  db.addWalker(walker)
    .then((id) => {
      res.json({ id: id[0] });
    })
    .catch((err) => {
      res.status(500).json({});
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  db.getWalker(id)
    .then((walker) => res.json(walker))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Message: 'Cannot find walker' });
    });
});

module.exports = router;
