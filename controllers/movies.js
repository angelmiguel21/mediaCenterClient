const _ = require('lodash');
const Movie = require('../models/movies');

async function getMovies(req, res, next) {
  const movies = await Movie.find({});
  res.send(movies);
};

async function getMovie(req, res, next) {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
};

async function saveMovie( req, res, next ) {
  console.log(req.body);

  let movie = new Movie();

  movie.name = req.body.name;
  movie.url = req.body.url;
  movie.thumbnail = req.body.thumbnail;

  movie.save((err, movieStored) => {
    if(err) res.status(500).send({
      message: `error al guardar, ${err}`
    });

    res.status(200).send({
      message: `Movie: ${movie}`
    });

  });
}

module.exports = {
  getMovies,
  getMovie,
  saveMovie
}