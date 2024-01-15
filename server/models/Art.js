const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  title: String,
  description: String,
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  stock: Number,
});

module.exports = mongoose.model('Art', artSchema);