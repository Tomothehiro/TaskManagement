var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    user: String,
    password: String
})

var Users = mongoose.model('Users', userSchema);

module.exports = Users;