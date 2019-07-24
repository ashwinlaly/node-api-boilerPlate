var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    http = require('http').Server(app),
    io = require('socket.io')(http)
    db = require('./mongodb'),
    userRoutes = require('./routes/users')();

let Socket;
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH , DELETE, PUT");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(userRoutes);



// const s = db.get().collection('users').watch();
// const cs = s.watch();
// cs.on('change',next =>{
//     console.log(next);
// });

app.get("/",function(req,res){
    res.send({
        status : 200
    });
});

io.on('connection',(socket) => {
    console.log("connected");
    Socket = socket;
    // socket.on('test', (data) => {
    //     socket.emit('send', ({ message : data }));
    // });
});

db.connect(er => {
    if(er) {

    }
    const usersStream = db.get().collection('users')
    const users = usersStream.watch();
    users.on('change',next =>{
        id = next.documentKey._id;
        db.get().collection('users').find({_id: id}).toArray()
        .then((users) => {
            Socket.emit('send', users);
        });
    });
    http.listen(1212,function(){   
        console.log("App Started");
    });
});