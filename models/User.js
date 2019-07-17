var mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        trim : true,
    }
});

var Users = new mongoose.model('user',UserSchema);

module.exports = Users;