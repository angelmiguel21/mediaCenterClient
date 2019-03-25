const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', async (req, res, next) => {
  const movies = await Movie.find({});
  console.log(movies);
  res.render('dashboard', {movies})
});

/*validar authetication*/
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
};

module.exports = router;
