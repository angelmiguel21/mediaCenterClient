const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {

  const user = await User.findOne({
    email: email
  });
  if (user) {
    return done(null, false, req.flash('signupMessage', 'Email is taken'));
  } else {
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.name = req.body.name;
    newUser.user = req.body.user;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.unit = req.body.unit;
    await newUser.save(function (err, user) {
      if (err) {
        console.log(err)
      }
    });
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  let user = await User.findOne({
    email: email
  });
  if (!user) {
    return done(null, false, req.flash('signinMessage', 'Not user found'));
  }
  if (!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
  } else {
    //const token = jwt.sign({user}, req.app.get('superSecret'));
    //user["token"] = token;
    done(null, user, )
    //console.log(user)
  }
}));
