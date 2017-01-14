const router = require('express').Router();
const path = require('path')
const bcrypt= require('bcrypt-node');
const request = require('request');
const nytApi = require('./API/nytApi.js');
const apiKey = process.env.API_KEY_NYT;
const Playlists = require('./playlist/playlistModel.js');
const Songs = require('./songs/songModel.js');
const Events = require('./events/eventModel.js');
const Users = require('./user/userModel.js');

module.exports = function(app, passport) {

  app.get('/search', isLoggedIn, (req,res) => {
    res.sendFile(path.join(__dirname, '/../client/search.html'))
  });

  app.post('/api/search', isLoggedIn, (req,res) => {
    let input = JSON.stringify(req.body.body); 
    request.get({
      url: `https://api.spotify.com/v1/search?q=${input}&type=album`
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {            
        res.send(body);
      } else {
        res.json(error);
      }
    });
  });

  app.post('/api/getId', isLoggedIn, (req, res) => {
    let artistName = req.body.body;
    request.get({
      url: `http://api.songkick.com/api/3.0/search/artists.json?apikey=ujMX1UFiCgZT5oaH&query=${artistName}`,
      method: "GET"
    },
    (error, response, body) => {
      if(!error && response.statusCode === 200) {
        var bodyParsed = JSON.parse(body);
        res.send(bodyParsed)
      } else {
        res.json(error);
      }
    });
  });

  app.post('/api/events', isLoggedIn, (req, res) => {
    var artist_id = req.body.body
    request.get({
      url: `http://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=ujMX1UFiCgZT5oaH`
    }, 
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        var bodyParse = JSON.parse(body);
        res.send(bodyParse);
      } else {
        res.json(error);
      }
    });
  });

  app.post('/api/videos', isLoggedIn, (req, res) => {
    let input = req.body.body
    request({
      url: "https://www.googleapis.com/youtube/v3/search",
      qs: {
        q: input,
        type: "video",
        videoEmbeddable: "true",
        videoSyndicated: "true",
        maxResults: 12,
        part: "snippet",
        key: "AIzaSyDuq91IyM4yVkDOCagx_Y_VvRnLyKHXfuE"
      }
    },
    (error, response, body) => {       
      if (!error && response.statusCode === 200) {
        res.send(body);
      } else {
        res.json(error);
      }
    });
  });

  app.post('/api/videofy', isLoggedIn, (req, res) => {
    let query = req.body.name.artist + " " + req.body.name.album;
    request({
      url: "https://www.googleapis.com/youtube/v3/search",
      qs: {
        q: query,
        type: "video",
        videoEmbeddable: "true",
        videoSyndicated: "true",
        maxResults: 1,
        part: "snippet",
        key: "AIzaSyDuq91IyM4yVkDOCagx_Y_VvRnLyKHXfuE"
      }
    },
    (error, response, body) => {
      if(!error && response.statusCode === 200) {
        res.json(body);
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
      res.send(playlists);
    });
  });

  app.get('/api/profilePlaylists', isLoggedIn, (req, res) => {
    let playlists;
    Playlists.getAllPlaylistsByUserId(passport.user.id)
    .then((userPlaylists) => {
      playlists = userPlaylists;
      let playlistIds = [];
      userPlaylists.forEach((playlist) => {
        playlistIds.push(Playlists.getPlaylistIdByName(playlist.Name, passport.user.id));
      });
      Promise.all(playlistIds).then((idArr) => {
        let idArray = [];
        idArr.forEach((id) => {
          idArray.push(id[0].id)
        });
        let songIds = [];
        idArray.forEach((id) => {
          songIds.push(Playlists.getPlaylistSongsByPlaylistId(id))
        });
        Promise.all(songIds).then((data) => {
          for(let i=0; i<playlists.length; i++) {
            playlists[i].songCount = data[i].length;
          }
          res.send(playlists);
        })
      });
    });
  });

  app.post('/api/newPlaylist', isLoggedIn, (req, res) => {
    Playlists.getPlaylistIdByName(req.body.body,passport.user.id)
    .then((playlist) => {
      if(playlist.length < 1) {
        Playlists.createNewPlaylist(req.body.body, passport.user.id)
        .then((data) => {
          res.send(data);
        });
      } else {
        res.send('Playlist already exists');
      }
    });
  });

  app.post('/api/deletePlaylist', isLoggedIn, (req,res) => {
    Playlists.getPlaylistIdByName(req.body.playlist, passport.user.id)
    .then((result) => {
      let playlistId = result[0].id;
      Playlists.deletePlaylist(playlistId).then((response) => {
        res.send('PLAYLIST DELETED')
      })
    })
  });

  app.post('/api/removePlaylistSong', isLoggedIn, (req, res) => {
    let playlistId = req.body.playlistId;
    let songId = req.body.songId;
    Playlists.removeSongFromPlaylist(playlistId, songId, passport.user.id).then((data) => {
      res.send('Song Deleted')
    })
  });

  app.post('/api/getPlaylistSongs', isLoggedIn, (req, res) => {
    Playlists.getPlaylistIdByName(req.body.body, passport.user.id)
    .then((result) => {
      if(result[0]) {
        let playlistId = result[0].id;
        Playlists.getPlaylistSongsByPlaylistId(playlistId, passport.user.id)
        .then((songs) => {
          let songsArr = [];
          for(let i = 0; i < songs.length; i++) {
            songsArr.push(Songs.getSongById(songs[i].SongId));
          }
          Promise.all(songsArr).then((arrSongs) => {
              sendSongs(arrSongs);
          })
          function sendSongs(arr) {
              res.send(arr);
          }      
        })
      }
    })
  })

  app.post('/api/saveSong', isLoggedIn, (req, res) => {
    let info = req.body.body;  
    Playlists.getPlaylistIdByName(info.playlistName, passport.user.id)
    .then((playlist) => {
      let playlistId = playlist[0].id;
      Songs.getAllSongs().then((allSongs) => {
        let songMatch = false;
        allSongs.forEach((s) => {       
          let songURI = JSON.parse(s.song).uri;
          if(songURI === info.songData.uri) {
            songMatch = s;
          }
        });
        if(songMatch) {
          Playlists.getPlaylistSongsByPlaylistId(playlistId)
          .then((pListSongs) => {
          let playListSongMatch = false;
            pListSongs.forEach((pListSong) => {
              if(pListSong.SongId === songMatch.id) {
                playListSongMatch = true;
              }        
            });
            if(!playListSongMatch) {
              Playlists.addSongToPlaylist(playlistId, songMatch.id)
              .then((result) => {
              })
            }
          })  
        } else {
          Songs.addSong(JSON.stringify(info.songData))
          .then((songs) => {
            let songId = songs[0];
            Playlists.addSongToPlaylist(playlistId, songId)
          })
        }
      })
    })
  })

  app.post('/api/saveEvent', isLoggedIn, (req,res) => {
    const savedEvent = req.body.body
    Events.getAllEvents().then((events) => {
      let match = false;
      events.forEach((event) => {
        let eventObj = JSON.parse(event.event)
        if(eventObj.name === savedEvent.name){
          match = event;
        }
      })
      if(match.id === Number) {
        let userEventMatch = false
        Events.getEventsByUserId(passport.user.id)
        .then((events) => {
          if(events.id === match.id) {
            userEventMatch = true;
          } else if(!userEventMatch) {
            Events.addEventToEventsUsers(newEventId, passport.user.id)
          }
        })
      } else {
        Events.saveEvent(JSON.stringify(savedEvent))
        .then((id) => {
          let newEventId = id[0]
          Events.addEventToEventsUsers(newEventId, passport.user.id)
        })
      }
    })
  });

  app.post('/api/removeUserEvent', isLoggedIn, (req,res) => {
    let eventId = req.body.eventId;
    let userId = passport.user.id;
    Events.removeUserEvent(eventId, userId).then((removed) => {
      res.send('removed');
    })
  });

  app.get('/', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/public/bundle.js'))
  });

  app.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/search',
    failureRedirect: '/login',
    failureFlash: true
  }), 
  (req, res) => {
    if(req.body.remember) {
      req.session.cookie.maxAge= 1000 * 60 * 3;
    } else {
       req.session.cookie.expires = false;
    }
  });
  
  app.get('/signup', (req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') })
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/search',
    failureRedirect: '/signup',
    failureFlash: true
  }));
  
  app.get('/profile', isLoggedIn, (req, res) => {
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

  //Get User Info 
  //==================>
  app.get('/api/getUserInfo', isLoggedIn ,(req,res) => {
    res.send(passport.user);
  });
  //==================>

  //Change Email
  //==================>
  app.post('/api/changeEmail', isLoggedIn, (req, res) => {
    if(req.body.email === '') {
      res.send("Nothing is updated");
    } 
    else {
    let newEmail = req.body.email;
    Users.updateEmail(newEmail, passport.user.id).then((updated) => {
      res.send("updated");
    });
   }
  });
  //==================>
  
  //Change Username
  //==================>
  app.post('/api/changeUsername', isLoggedIn, (req,res) => {
    if (req.body.username === '') {
      res.send("Nothing is updated");
    } else { 
      let newUsername = req.body.username;
      let userId = passport.user.id;
      Users.getUserByName(newUsername).then((user) => {
        if(!user) {
          Users.updateUsername(newUsername, userId).then((updated) => { 
            if(updated) {
              res.send('updated');
            }
          });
        } else {
          res.send('Username Taken');
        }
      })
    }
  });
  //==================>

  //Change Password
  //==================>
    app.post('/api/changePassword', isLoggedIn, (req, res) => {
      if(req.body.newPassword === '') {
        res.send("Nothing is updated");
    }
    else {
    let newPassword = req.body.newPassword;
    Users.getUserById(passport.user.id).then((userInfo) => {
      if(userInfo.password) {
        newPassword = bcrypt.hashSync(newPassword, null, null);
        Users.updatePassword(newPassword, passport.user.id).then((updated) => {
          res.send("updated");
        });
      }
    });
  }
  });
  //==================>

  app.post('/api/news', isLoggedIn, (req, res) => { 
    let reqBody = req.body.body;
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "ab537ed22a1840dc8ee6407cb2562df8",
        'q': reqBody
      }
    }, (err, response, body) => {
      if(typeof body === "string") {
      body = JSON.parse(body);
      }
      res.send(body);
    });
  });

  //GET ALL EVENTS USER ID
  //========================>
  app.get('/events/userid', isLoggedIn, (req, res) => {
    Events.getEventsByUserId(passport.user.id)
    .then((data) => {
     let events = data;
     let eventsArray=[];
      events.forEach((event) => {
      eventsArray.push(Events.getEventsById(event.EventsId));
    });
      Promise.all(eventsArray).then((array) => {
        sendEvents(array);
      });

      sendEvents = (arr) => {
        res.send(arr);
      }
    });
  });
  //========================>

  //DELETE USER EVENT
  //========================>
    app.get('api/deleteEvent', isLoggedIn, (req, res) => {
      
    })
  //========================>

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
  // ========================>

  //FACEBOOK ROUTES
  //========================>

  app.get('/auth/facebook', passport.authenticate('facebook-login', { scope: 'email' }, {
    successRedirect: '/search/',
    failureRedirect: '/login'
  }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook-login', {
    successRedirect: '/#/home',
    failureRedirect: '/login'
  }));
  //========================>
};