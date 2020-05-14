const express = require('express');
const { applyAuthRoutes } = require('authenticare/server');
const { createUser, userExists, getUserByName } = require('../db/userData');
const router = express.Router();

applyAuthRoutes(router, {
  userExists,
  createUser,
  getUserByName,
});

module.exports = router;
