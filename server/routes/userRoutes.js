const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log("USER",req.params.id)
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





module.exports = router;