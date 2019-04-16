const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    let title = "Dashboard";
    res.render('dashboard/index', {
        message: 'dashboard',
        title
    })
});

router.get('/addMovies', function (req, res, next) {
    let title = "Add Movie"
    res.render('dashboard/addMovie', {
        message: 'insert form here'
    })
});

router.get('/listMovies', function (req, res, next) {
    let title = "List Movie"
    res.render('dashboard/listMovie', {
        message: 'List Movies here'
    })
});


module.exports = router;