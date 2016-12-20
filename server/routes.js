var router = require('express').Router();
var path = require('path')

// router.get('/api/main', (req,res) => {
// 	res.sendFile(path.join(__dirname, '/../client/comingSoon.html'))
// });

// router.get('/api/signup', (req,res) => {  //replace anon-fn with user.controller
// 	// res.sendFile(path.join(__dirname, '/../client/auth/signup.html'));
// })

// router.get('/api/login', (req,res) => { // replace anon-fn with user.controller
// 	//res.sendFile(path.join(__dirname,'/../client/auth/login.html'))
// });

// router.get('/api/getMessages', (req,res) => {
//   console.log('Getting All Messages Route');
// });/*controller.messages.get*/

// router.post('/api/search', (req,res) => {
//   console.log("Search Term", req.body)
// });

// router.post('api/postMessage', (req,res) => {
//   console.log('Posting Message Route');
// });/*controller.messages.post*/

// router.get('/api/getNews', (req,res) => {
//   console.log('Getting News Route');
// });/*controller.news.get*/

// router.get('/api/getPlaylist', (req,res) => {
//   console.log('Getting Playlist Route');
// });/*controller.playlist.getAll*/

// router.post('/api/updatePlayist', (req,res) => {
//   console.log('Updating Playlist Route');
// });/*controller.playlist.update*/

// router.get('/api/deletePlaylist', (req,res) => {
//   console.log('Deleting Playlist Route');
// });/*controller.playlist.delete*/

// module.exports = router;

module.exports = function(app, passport) {
  app.get('/', (req, res) => {
    res.render('index.ejs')
  });

  app.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  //app.post('/login', do passport stuff)
  
  app.get('/signup', (req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') })
  });

  //app.post('/signup', do all passport stuff)
  
  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile.ejs', {
      user: req.user
    });
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}