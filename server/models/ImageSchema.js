const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filename: String,
    originalname: String,
    path: String,
    imageName: String,  
    artistName: String,
    description: String,
    price:String,
  });
  
  module.exports = mongoose.model('Image', imageSchema);  