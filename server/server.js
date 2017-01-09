require('dotenv').config();
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
var userModel = require('./user/userModel.js');
var flash = require('connect-flash');
module.exports = app;


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client')));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(session({
  secret:"someSecret",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport')(passport);
require('./routes.js')(app, passport);
//app.use(router);
var port = process.env.PORT || 3005;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});
// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 
