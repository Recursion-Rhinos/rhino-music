var router = require('express').Router();
var path = require('path')

router.get('/api/main', function(req, res) {
	res.sendFile(path.join(__dirname, '/../client/components/component.js'))
});

router.get('/api/signup', function(req, res) {
	// res.sendFile(path.join(__dirname, '/../client/auth/signup.html'));
})
router.get('/api/login', function(req, res) {
	//res.sendFile(path.join(__dirname,'/../client/auth/login.html'))
});




module.exports = router;