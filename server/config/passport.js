const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../user/userModel.js');
const bcrypt = require('bcrypt-node');
const configAuth = require('./auth');
const localSignup = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  emailField: 'email',
  passReqToCallback: true
},
  (req, username, password, done) => {
    User.getUserByName(username).then((user) => { 
      if(user) {
        return done(null, false, req.flash('signupMessage', 'That Username is already taken.'));
      } else {
        const newUser = {
          username: username,
          password: bcrypt.hashSync(password, null, null),
          email: req.body.email
        };
        User.storeUser(newUser.username, newUser.password, newUser.email).then((data) => {
          return done(null,data);
        });
      }
    });
  });

const localLogin = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
  (req, username, password, done) => {
    User.getUserByName(username).then((user) => {
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }     
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong password!'));
      }
      return done(null, user);
    });
  });

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    if (Array.isArray(user)) {
      const id = user[0];
      user = {
        id: id
      };
    }
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.getUserById(id).then((data) => {
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

  const googleStrategy = new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    redirect_uri:'/auth/google/callback'
  },
   (token, refreshToken, profile, done) => {
     User.getUserByName(profile.displayName)
     .then((user) => { 
       if (user) {
         return done(null, user);
       } else {
         User.storeUser(profile.displayName, 
          null, profile.emails[0].value, null, JSON.stringify({token: token}))
         .then((data) => {
           return done(null, data);
         });
       }
     });     
   });
//========================>

//FACEBOOK AUTHENTICATION
//========================>
  const facebookStrategy = new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    redirect_uri: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)']
  },
  (token, refreshToken, profile, done) => {
    User.getUserByName(profile.displayName)
     .then(function(user) { 
       if (user) {
         return done(null, user);
       } else {
         User.storeUser(profile.displayName, 
          null,profile.emails[0].value, null, JSON.stringify({token: token}))
         .then((data) => {
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