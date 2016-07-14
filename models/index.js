var mongoose=require('mongoose');
var config=require('../settings');
mongoose.connect(config.url);
exports.User = mongoose.model('user',new mongoose.Schema({
    username:String,
    password:String,
    email:String
}));