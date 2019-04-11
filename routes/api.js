const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, './movies/');
  },
  filename: function(req,file,cb) {
    cb(null, file.originalname);
  }
});

const uploads = multer({
  storage: storage
});

const cpUploads = uploads.fields([
  {name: 'movie', maxCount: 1},
  {name: 'subs', maxCount: 1},
  {name: 'thumbnail', maxCount: 1}
]);

const usersCtrl = require('../controllers/api');
const moviesCtrl = require('../controllers/movies');
const seriesCtrl = require('../controllers/series');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    Message: 'Welcome to the API'
  });
});

/* get all users */
router.get('/users', usersCtrl.getUsers);


/* Movies  ROUTES*/
router.get('/movies', moviesCtrl.getMovies);
router.get('/movies/:id', moviesCtrl.getMovie);
router.post('/movies', cpUploads, moviesCtrl.postNewMovie);
//router.put('',moviesCtrl.putMovies);
//router.delete('', moviesCtrl.deleteMovies);

/* Series  ROUTES*/
router.get('/series', seriesCtrl.getSeries);
router.get('/series/:id', seriesCtrl.getSerie);
//router.post('/series', seriesCtrl.postNewSerie);
//router.put('',seriesCtrl.putSerie);
//router.delete('', seriesCtrl.deleteSeries);

/*validar authetication*/
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
};


module.exports = router;