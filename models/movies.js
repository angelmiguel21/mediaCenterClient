var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

var movieSchema = new Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50,
  },
  url: {
    type: String,
    unique: true,
    lowercase: true,
    require: true,
    minlength: 5,
    maxlength: 512
  },
  thumbnail: {
    type: String,
    minlength: 8,
    maxlength: 1024,
  }
});

module.exports = mongoose.model('movies', movieSchema);