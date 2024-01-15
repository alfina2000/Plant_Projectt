const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const plantSchema = new mongoose.Schema({
    name: String,
    species: String,
    description:String,
    rate: String
  });

  plantSchema.plugin(passportLocalMongoose);
  
const Plantmodel = mongoose.model('plantadd', plantSchema);
module.exports = Plantmodel
  