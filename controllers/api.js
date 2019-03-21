const _ = require('lodash');
const User = require('../models/user');
const Movies = require('../models/movies');

async function getUsers (req, res) {
  const users = await User.find({});
  res.send(users);
};

async function getMovies (req, res, next) {
  const movies = await Movies.find({});
  res.send(movies);
};

module.exports = {
  getUsers,
  getMovies
}