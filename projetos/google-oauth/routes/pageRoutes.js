const express = require('express');
const path = require('path');
const { ensureAuthenticated } = require('../middleware');

const router = express.Router();

router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/profile', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/profile.html'));
});

router.get('/', (req, res) => {
  res.redirect('/index');
});

module.exports = router;
