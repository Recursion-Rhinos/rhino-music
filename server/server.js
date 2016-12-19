var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var request = require('request')
var morgan = require('morgan');
var router = require('./routes.js')
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var localStrategy = require('passport-local').Strategy;
var app = express();
module.exports = app;

app.use(bodyParser.json() );
app.use(express.static(path.join(__dirname, '/../client')));
app.use(cookieParser());
app.use(session({secret:"someSecret"}))
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

var port = process.env.PORT || 3005;
app.listen(port);
console.log("Listening on port " + port);