var mongodb = require('mongodb').MongoClient,
    config = require('./config').mongodb;
let _db;

module.exports = {
    connect : callback => {
        mongodb.connect(`${config.url}`, { useNewUrlParser : true }, function (err, con) {
            _db = con.db('test');
            console.log("Connection init");
            callback();
            // const s = _db.collection('users')
            // const cs = s.watch();
            // cs.on('change',next =>{
            //     console.log(next);
            // });
        });
    },
    get : function () {
        console.log("Connection get");
        return _db;
    }
};