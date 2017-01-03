var LocalStrategy = require('passport-local').Strategy;
var User = require('../user/userModel.js');
var bcrypt = require('bcrypt-node');
// console.log('USER: ', User.getUserById)
var localSignup = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    emailField: 'email',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    console.log('local-signup config session: ', req.session)
    User.getUserByName(username).then((user) => { 
      if(user) {
        return done(null, false, req.flash('signupMessage', 'That Username is already taken.'));
      } else {
        var newUser = {
          username: username,
          password: bcrypt.hashSync(password, null, null),
          email: req.body.email
        };
        User.storeUser(newUser.username, newUser.password, newUser.email).then((data) => {
          console.log('DATA: ',data);
          return done(null,data);
        });
      }
    })
  });

var localLogin = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    User.getUserByName(username).then((user) => {
      console.log('LOCAL LOGIN USER: ', user)
      if(!user){
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }     
      if(!bcrypt.compareSync(password, user.password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong password!'));
      }
      console.log('passwordsMatch: ', bcrypt.compareSync(password, user.password))
      console.log('FOUND USER LOCAL-LOGIN')
      return done(null, user);
    })
  });

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    console.log('serializeUser: ', user)
    if(Array.isArray(user)) {
      var id = user[0]
      user = {
        id:id
      }
    }
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.getUserById(id).then((data) => {
      // console.log('deserializeDATA: ', data);
      done(null, data);
    });
  });

  passport.use('local-signup',localSignup);

  passport.use('local-login',localLogin)
}