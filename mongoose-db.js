var mongoose = require('mongoose'),
    config = require('./config').mongodb;

mongoose.connect(`${config.url}${config.db}`, { useNewUrlParser : true , useFindAndModify : false } ,(err, res) => {
    if(err){
        console.log("Connection failed");
    } else {
        console.log("Connection success");
    }
})