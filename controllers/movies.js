const _ = require('lodash');
const Movie = require('../models/movies');

async function getMovies(req, res, next) {
  const movies = await Movie.find({});
  console.log(movies)
  res.send(movies);
};

async function getMovie(req, res, next) {
  const movie = await Movie.findById(req.params.id);
  console.log(movie);
  res.render('player', {movie})
  //res.send(movie);
};

async function postNewMovie(req, res, next) {
  console.log(req.body);

  let movie = new Movie();

  movie.name = req.body.name;
  movie.url = req.body.url;
  movie.thumbnail = req.body.thumbnail;  
  movie.genre = req.body.genre;
  movie.subs = req.body.subs;

  await movie.save((err, movieStored) => {
    if(err) res.status(500).send({
      message: `error al guardar, ${err}`
    });

    res.status(200).redirect('/movies')
    
    //send({message: `Movie: ${movieStored}`});

  });
}

module.exports = {
  getMovies,
  getMovie,
  postNewMovie
}