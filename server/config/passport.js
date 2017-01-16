var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../user/userModel.js');
var bcrypt = require('bcrypt-node');
var configAuth = require('./auth');
// console.log('USER: ', User.getUserById)
var localSignup = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  emailField: 'email',
  passReqToCallback: true
},
  function(req, username, password, done) {
    console.log('local-signup config session: ', req.session);
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
    });
  });

var localLogin = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
  function(req, username, password, done) {
    User.getUserByName(username).then((user) => {
      console.log('LOCAL LOGIN USER: ', user);
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }     
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong password!'));
      }
      console.log('passwordsMatch: ', bcrypt.compareSync(password, user.password));
      console.log('FOUND USER LOCAL-LOGIN');
      return done(null, user);
    });
  });

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    console.log('serializeUser: ', user);
    if (Array.isArray(user)) {
      var id = user[0];
      user = {
        id: id
      };
    }
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.getUserById(id).then((data) => {
      // console.log('deserializeDATA: ', data);
      let user = {
        id: data.id,
        username: data.username
      };
      passport.user = user;
      done(null, data);
    });
  });

 //GOOGLE AUTHENTICATION
//=======================>

  var googleStrategy = new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    redirect_uri:'/auth/google/callback'
  },
   function(token, refreshToken, profile, done) {
     User.getUserByName(profile.displayName)
     .then(function(user) { 
       if (user) {
         return done(null, user);
       } else {
         User.storeUser(profile.displayName, 
          null, profile.emails[0].value, null, JSON.stringify({token: token}))
         .then((data) => {
           console.log('Google DATA: ', data);
           return done(null, data);
         });
       }
     });     
   });
//========================>

//FACEBOOK AUTHENTICATION
//========================>
  var facebookStrategy = new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    redirect_uri: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)']
  },
  function(token, refreshToken, profile, done) {
    console.log('PROFILE', profile);
    User.getUserByName(profile.displayName)
     .then(function(user) { 
       if (user) {
         return done(null, user);
       } else {
         User.storeUser(profile.displayName, 
          null,profile.emails[0].value, null, JSON.stringify({token: token}))
         .then((data) => {
           console.log('Facebook DATA: ', data);
           return done(null, data);
         });
       }
     });     
  });

//========================>
  passport.use('local-signup',localSignup);
  passport.use('facebook-login', facebookStrategy);
  passport.use('google-login', googleStrategy);
  passport.use('local-login',localLogin);

};