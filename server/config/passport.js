var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../user/userModel.js');
var bcrypt = require('bcrypt-node');
var configAuth = require('./auth');
console.log("CONFIGAUTH", configAuth);
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
      let user = {
        id: data.id,
        username: data.username
      }
      passport.user = user;
      done(null, data);
    });
  });
 //GOOGLE AUTHENTICATION
//=======================>

 let googleStategy = new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  },

   function(token, refrechToken, profile, done) {
     User.getUserByName(profile.displayName)
     .then(function(user){ 
       if(user) {
        return done(null, user);
       } 
       else {
       User.storeUser(profile.displayName, null, profile.email[0].value, null, JSON.stringify({token: token}))
       .then((data) => {
        console.log('Google DATA: ', data);
        return done(null, data);
      });
    }

        // newUser.google.id = profile.id;
        // newUser.google.token = token;
        // newUser.google.name = profile.displayName;
        // newUser.google.email= profile.emails[0].value;
       
      });
  });
//========================>
  passport.use('local-signup',localSignup);
  passport.use('google-login', googleStategy);
  passport.use('local-login',localLogin);
};