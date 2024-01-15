const express = require('express');
const router = express.Router();
const passport = require('passport');
const Usermodel = require('../models/User');

// User signup
router.post('/signup', (req, res) => {
    Usermodel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
 
  
});

// User login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;