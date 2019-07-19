var mongodb = require('mongodb').MongoClient,
    config = require('./config').mongodb;
let _db;

module.exports = {
    connect : function () {
        mongodb.connect(`${config.url}`, { useNewUrlParser : true }, function (err, con) {
            _db = con.db('test');
            // console.log(_db);
        });
    },
    get : function () {
        // console.log('here', _db)
        return _db;
    }
};