var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//set up a mongoose model
module.exports = mongoose.model('User', new Schema({
	
	name: String,
	email: String,
	mobile: Number,
	password: String
}));

