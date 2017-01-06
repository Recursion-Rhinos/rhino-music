var router = require('express').Router();
var path = require('path')
var dummyData = require ('../dummyData.js')
var request = require('request');
const nytApi = require('./API/nytApi.js');
const apiKey = process.env.API_KEY_NYT;
const Playlists = require('./playlist/playlistModel.js');
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
  console.log("SEARCH MUSIC REQQQQ", req.body)
  let input = JSON.stringify(req.body.body);
   
   request.get({
      url: `https://api.spotify.com/v1/search?q=${input}&type=album`
    },
      function(error, response, body) {
        
        if (!error && response.statusCode === 200) {
          console.log(body)
          res.send(body);
        } else {
          res.json(error);
        }
      });
});

app.post('/api/getId', (req, res) => {
     console.log("EVENTS INPUT", req.body);

    let artistName = req.body.body;

  request.get({
            url: `http://api.songkick.com/api/3.0/search/artists.json?apikey=ujMX1UFiCgZT5oaH&query=${artistName}`,
            method: "GET"
        },
        function(error, response, body) {

            if (!error && response.statusCode === 200) {
              var bodyParsed = JSON.parse(body);

              res.send(bodyParsed)

            } else {
                res.json(error);
            }
        });
});
app.post('/api/events', (req, res) => {

  console.log("EVENTS ID SHOULD BE HERE", req.body);

    var artist_id = req.body.body

    request.get({
        url: `http://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=ujMX1UFiCgZT5oaH`

    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var bodyParse = JSON.parse(body);
            console.log("DO I HAVE EVENTS OR NAH!?", bodyParse)
            res.send(bodyParse);

        } else {
            res.json(error);
        }
    });
});

app.post('/api/videos', (req, res) => {

    let input = req.body.body

    request({
        url: "https://www.googleapis.com/youtube/v3/search",
        qs: {
            q: input,
            type: "video",
            videoEmbeddable: "true",
            maxResults: 2,
            part: "snippet",
            key: "AIzaSyDuq91IyM4yVkDOCagx_Y_VvRnLyKHXfuE"
          }
        },
        function(error, response, body) {
         
            if (!error && response.statusCode === 200) {

                res.send(body);
            } else {
                res.json(error);
          }
    });
});

app.get('/api/myMusic', isLoggedIn, (req, res) => {
  let playlists;
  Playlists.getAllPlaylistsByUserId(passport.user.id)
  .then((data) => {
    playlists = data;
    console.log('GET_PLAYLISTS: ',playlists);
    res.send(playlists);
  });
});
app.get('/api/newPlaylist', isLoggedIn, (req, res) => {
  Playlists.getPlaylistIdByName(/*replace with req.playlistName ->*/'MyPlaylist4',passport.user.id)
  .then((playlist) => {
    if(playlist.length < 1) {
      Playlists.createNewPlaylist(/*replace with req.playlistName ->*/'MyPlaylist4', passport.user.id)
      .then((data) => {
        console.log('Playlist Created', data);
        res.send(data);
      });
    } else {
      res.send('Playlist already exists');
    }
  });
});

app.get('/api/deletePlaylist', isLoggedIn, (req,res) => {
  Playlists.getPlaylistIdByName('MyPlaylist4', passport.user.id)
  .then((result) => {
    console.log('GET PLAYLIST ID: ', result)
    let playlistId = result[0].id;
    Playlists.deletePlaylist(playlistId).then((response) => {
      console.log('Playlist Deleted', response);
    })
  })
});

app.post('/api/getPlaylistSongs', isLoggedIn, (req, res) => {
  Playlists.getPlaylistIdByName(req.body.body, passport.user.id)
  .then((result) => {
    let playlistId = result[0].id;
    Playlists.getPlaylistSongsByPlaylistId(playlistId, passport.user.id)
    .then((songs) => {
      console.log('PLAYLIST SONGS: ', songs);
      res.send(songs);
    })
  })
})


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
  }), (req, res) => {
    if(req.body.remember) {
      req.session.cookie.maxAge= 1000 * 60 * 3;
    } else {
       req.session.cookie.expires = false;
    }
  });
  
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


  app.post('/api/news', (req, res) => { 
    let reqBody = req.body.body;
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "af60270881bb4977ad34da8640335d97",
        'q': reqBody
      }
    }, (err, response, body) => {
      body = JSON.parse(body);
      res.json(body);
    });
  });


//GOOGLE ROUTES
//========================>
  app.get('/auth/google', passport.authenticate('google-login', { scope : ['profile', 'email'] }, {
    successRedirect: '/search',
    failureRedirect: '/login'
  }));

  app.get('/auth/google/callback',passport.authenticate('google-login', {
    successRedirect: '/search',
    failureRedirect: '/login'
  }));
  
//========================>

//FACEBOOK ROUTES
//========================>

  app.get('/auth/facebook', passport.authenticate('facebook-login', { scope: 'email' }, {
    successRedirect: '/search',
    failureRedirect: '/login'
  }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook-login', {
    successRedirect: '/search',
    failureRedirect: '/login'
  }));


//========================>

};