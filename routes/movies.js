const express = require('express');
const router = express.Router();

const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.getMovies);
router.get('/:id', moviesCtrl.getMovie);
router.get('/new/save', moviesCtrl.getNewMovie);
router.post('/new/save', moviesCtrl.postNewMovie);

module.exports = router;