var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var request = require('request')
var morgan = require('morgan');
var router = require('./routes.js')
var app = express();
var userModel = require('./user/userModel.js');
module.exports = app;



app.use( bodyParser.json() );
app.use(express.static(path.join(__dirname, '/../client')));

app.post('/main', function (req, res) {

})

app.get('/', function (req, res) {
  res.send(path.join(__dirname, '/../comingSoon.html'))
});
app.use(router);


var port = process.env.PORT || 3005;
app.listen(port,(err) => {
	console.log("Listening on port " + port);
});

