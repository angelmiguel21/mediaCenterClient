const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema ({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50
  },
  url: {
    type: String,
    unique: true,
    lowercase: true,
    require: true,
    minlength: 5,
    maxlength: 1000
  },
  thumbnail: {
    type: String,
    minlength: 8,
    maxlength: 1000
  },
  genre: {
    type: String,
    require: true,
    lowercase: true
  },
  subs:{
    type: String,
    minlength: 5,
    maxlength: 1000
  },  
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('movies', movieSchema);