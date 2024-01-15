const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenumber: String,
  age: Number,
  username: String,
  password: String,
  role: { type: String, enum: ['user', 'staff', 'admin'], default: 'user' },
});

userSchema.plugin(passportLocalMongoose);

const Usermodel = mongoose.model('user', userSchema);
module.exports = Usermodel