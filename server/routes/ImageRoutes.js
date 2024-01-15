const express = require('express');
const router = express.Router();
const ImageSchema = require('../models/ImageSchema');


router.get('/user', async (req, res) => {
  try {
    var data = await ImageSchema.find();
    const cuisinesWithImageUrl = data.map(cusine => ({
      ...cusine._doc,
      path: `http://localhost:5000/uploads${cusine.path}`
    
    }));
    // /y
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
