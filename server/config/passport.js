var LocalStrategy = require('passport-local').Strategy;
var User = require('../user/userModel.js');
//console.log('USER: ', User.getUserById)
module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null,user.id);
  });
  passport.deserializeUser((id, done) => {
    User.getUserById(id).then(data) => {
      console.log('DATA: ', data);
    };
  });

  passport.user('local-signup', new LocalStrategy({
    
  }))
}