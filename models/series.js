const mongoose = require('mongoose');
const { Schema } = mongoose;

const serieSchema = new Schema ({
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
    maxlength: 100
  },
  thumbnail: {
    type: String,
    minlength: 8,
    maxlength: 100
  },
  genre: {
    type: String,
    require: true,
    lowercase: true
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

module.exports = mongoose.model('series', serieSchema);