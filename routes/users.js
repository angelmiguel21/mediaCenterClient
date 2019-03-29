const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Nothig Here');
});

/* GET login page*/
router.get('/signin', (req, res, next) => {
  res.render('auth/signin', {
    title: 'Login'
  })
});

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/movies',
  failureRedirect: '/users/signin',
  passReqToCallback: true
}));


/*GET signup page */
router.get('/signup', isAuth, (req, res, next) => {
  res.render('auth/signup', {
    title: 'Signup'
  })
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/users/signin',
  failureRedirect: '/signup',
  passReqToCallback: true
}));

/* GET logout */
router.get('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/users/signin')
});

/*validar authetication*/
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/signin')
};

module.exports = router;
