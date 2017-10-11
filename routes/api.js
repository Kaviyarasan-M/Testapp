var express = require('express');
var mongoose = require('mongoose');
var config = require('../config/database');
var User = require('../app/models/user');


var app = express();
var router = express.Router();


mongoose.connect(config.database);
app.set('superSecret',config.secret);




/*User sign up page. */
router.post('/signup', function(req, res, next) {
	 var userinfo = new User({
	 	name: req.body.name,
	 	email: req.body.email,
	 	mobile: req.body.mobile,
	 	password: req.body.password
	 });
	 userinfo.save(function (err,user) {
	 	if (err) return JSON.stringify(err);
	 	//saved
	 	if(user) {
	 		res.send(user);
	 				
		}	
	 })
	});


// User Signin
router.post('/login', function(req, res, next) {
	User.findOne({"mobile":req.body.mobile,"password":req.body.password},['mobile','password'],function(err, users){
		if(users) {
			res.send(users);
		}else{
			res.send({"message":"failure"});
		}	
	})
});














module.exports = router;