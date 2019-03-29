const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');
const Serie = require('../models/series');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find({}).sort([['created_at', -1]]);
  if (movies.length > 0 ){
    res.render('movies', {movies})
  }
  else {
    res.render('movies', {
      message: 'No Movies to show, reg a new Movie'
    })
  }
});

router.get('/home', function(req,res,next) {
  res.render('dashboard', {message: 'dashboard'})
});

router.get('/series', function(req,res,next) {
  res.render('series', {message: 'Doit for the series'})
});

/*validar authetication*/
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
};

module.exports = router;
