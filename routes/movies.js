const express = require('express');
const router = express.Router();

const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.getMovies);
router.get('/:id', moviesCtrl.getMovie);
router.post('/save', moviesCtrl.saveMovie);

module.exports = router;