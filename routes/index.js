const express = require('express');
const router = express.Router();
const fs = require('fs');
const recursive = require('recursive-readdir');

const Movie = require('../models/movies');
const Serie = require('../models/series');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'MediaCenter' });
  res.redirect('/movies')
});

router.get('/movies', async (req, res, next) => {
  let title = "Movies"
  const movies = await Movie.find({}).sort([['created_at', -1]]);
  if (movies.length > 0 ){
    res.render('movies', {movies, title})
  }
  else {
    res.render('movies', {
      message: 'No Movies to show, reg a new Movie',
      title
    })
  }
});

router.get('/home', function(req,res,next) {
  let title = "Dashboard";
  res.render('dashboard', {message: 'dashboard', title})
});

router.get('/series', function(req,res,next) {
  let title = "Series"
  res.render('series', {message: 'Doit for the series', title})
});

router.get('/read', function(req,res,next) {
  let directory = "movies";
  // let dirBuf = Buffer.from(directory);
  // let files = fs.readdirSync(directory);

  recursive(directory, function(err, files) {
    res.send(files);
  })
  
});

/*validar authetication*/
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
};

module.exports = router;
