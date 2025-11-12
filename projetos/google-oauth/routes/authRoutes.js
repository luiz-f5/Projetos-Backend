const express = require('express');
const passport = require('passport');
const path = require('path');
const { ensureAuthenticated } = require('../middleware');

const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/index' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

router.get('/user', ensureAuthenticated, (req, res) => {
  res.json({
    name: req.user.displayName,
    email: req.user.emails[0].value
  });
});

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/index');
  });
});

module.exports = router;
