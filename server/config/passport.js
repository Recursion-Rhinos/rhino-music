var LocalStrategy = require('passport-local').Strategy;
var User = require('../user/userModel.js');
var bcrypt = require('bcrypt-node');
// console.log('USER: ', User.getUserById)


module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null,user.id);
  });
  passport.deserializeUser((id, done) => {
    User.getUserById(id).then((data) => {
      console.log('DATA: ', data);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    emailField: 'email',
    passReqToCallback: true
  },
  function(req, username, password, email, done) {
    User.getUserByName(username).then((err,user) => {
      if(err) {
        console.log(err)
      } 
      if(user.length) {
        return done(null, false, rewq.flash('signupMessage', 'That Username is already taken.'));
      } else {
        var newUser = {
          username: username,
          password: bcrypt.hashSync(password, null, null),
          email: email
        };
        User.storeUser(newUser.username, newUser.password, newUser.email).then((data) => {
          console.log('DATA: ',data);
          return done(null, data)
        });
      }
    })
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    User.getUserByName(username).then((err, user) => {
      if(err){ console.log(err) }
      if(!user.length){
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }
      if(!bcrypt.compareSync(password, user[0].password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong password!'));
      }

      return done(null, user[0]);
    })
  }))
}