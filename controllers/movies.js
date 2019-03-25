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

function getNewMovie(req, res, next) {
  res.render('register',{message: 'Done'});
};

async function postNewMovie(req, res, next) {
  console.log(req.body);

  let movie = new Movie();

  movie.name = req.body.name;
  movie.url = req.body.url;
  movie.thumbnail = req.body.thumbnail;

  await movie.save((err, movieStored) => {
    if(err) res.status(500).send({
      message: `error al guardar, ${err}`
    });

    res.status(200).send({
      message: `Movie: ${movieStored}`
    });

  });
}

module.exports = {
  getMovies,
  getMovie,
  getNewMovie,
  postNewMovie
}