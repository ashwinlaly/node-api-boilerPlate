var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./mongodb'),
    userRoutes = require('./routes/users')();
    
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

db.connect(er => {
    if(er) {

    }
    const s = db.get().collection('users')
    const cs = s.watch();
    cs.on('change',next =>{
        console.log(next);
    });
    app.listen(1212,function(){   
        console.log("App Started");
    });
});