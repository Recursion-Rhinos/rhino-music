var router = require('express').Router();
var path = require('path')
var dummyData = require ('../dummyData.js')
var request = require('request');
const nytApi = require('./API/nytAPI.js');
const apiKey = process.env.API_KEY_NYT;
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
module.exports = function(app, passport) {

app.get('/search', isLoggedIn, (req,res) => {
  res.sendFile(path.join(__dirname, '/../client/search.html'))
})

app.post('/api/search', (req,res) => {
  console.log("INPUT:", req.body)
  let input = JSON.stringify(req.body);
  console.log("Input:", input)
   request({
      url: 'https://api.spotify.com/v1/search',
      qs: {
        q: input,
        type: 'track',
        limit: 6
      }
    },
      function(error, response, body) {
        console.log("BODY", body)
        if (!error && response.statusCode === 200) {
      console.log(body)
          
          res.send(body);
        } else {
          res.json(error);
        }
      });
});
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


  app.get('/', isLoggedIn, (req, res) => {
    console.log('ROUTES.JS GET')
    res.sendFile(path.join(__dirname, '/../client/public/bundle.js'))
  });

  app.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/search',
    failureRedirect: '/login',
    failureFlash: true
  })
  );
  
  app.get('/signup', (req, res) => {
    console.log('rendering signup')
    res.render('signup.ejs', { message: req.flash('signupMessage') })
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/search',
    failureRedirect: '/signup',
    failureFlash: true
  }));
  
  app.get('/profile', isLoggedIn, (req, res) => {
    console.log('PROFILE!!!')
    res.render('profile.ejs', {
      user: req.user
    });
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}


  app.get('/api/news', (req, res) => { 
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "af60270881bb4977ad34da8640335d97",
        'q': 'Madonna'
      },
    }, (err, response, body) => {
      body = JSON.parse(body);
      console.log("MULTIMEDIA", body.response.docs[0].multimedia);
      res.send(body);
    });
  });
};


