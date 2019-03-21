const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/api');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    Message: 'Welcome to the API'
  });
});

/* get all users */
router.get('/users', usersCtrl.getUsers);

module.exports = router;