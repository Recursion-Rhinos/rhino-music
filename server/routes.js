var router = require('express').Router();
var path = require('path')
var dummyData = require ('../dummyData.js')
var request = require('request');

router.get('/api/main', (req,res) => {
	res.sendFile(path.join(__dirname, '/../client/comingSoon.html'))
});

router.get('/api/signup', (req,res) => {  //replace anon-fn with user.controller
	// res.sendFile(path.join(__dirname, '/../client/auth/signup.html'));
})

router.get('/api/login', (req,res) => { // replace anon-fn with user.controller
	//res.sendFile(path.join(__dirname,'/../client/auth/login.html'))
});

router.get('/api/getMessages', (req,res) => {
  console.log('Getting All Messages Route');
});/*controller.messages.get*/

router.post('/api/search', (req,res) => {
  console.log("INPUT:", req.body)
  let input = JSON.stringify(req.body.inputVal);

   request({
      url: 'https://api.spotify.com/v1/search',
      qs: {
        q: input,
        type: 'track',
        limit: 6
      }
    },
      function(error, response, body) {
        console.log(body);
        if (!error && response.statusCode === 200) {
          console.log(body);
          res.send(body);
        } else {
          res.json(error);
        }
      });
});

router.post('api/postMessage', (req,res) => {
  console.log('Posting Message Route');
});/*controller.messages.post*/

router.get('/api/getNews', (req,res) => {
  console.log('Getting News Route');
});/*controller.news.get*/

router.get('/api/getPlaylist', (req,res) => {
  console.log('Getting Playlist Route');
});/*controller.playlist.getAll*/

router.post('/api/updatePlayist', (req,res) => {
  console.log('Updating Playlist Route');
});/*controller.playlist.update*/

router.get('/api/deletePlaylist', (req,res) => {
  console.log('Deleting Playlist Route');
});/*controller.playlist.delete*/



module.exports = router;