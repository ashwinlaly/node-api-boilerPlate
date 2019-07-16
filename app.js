var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH , DELETE, PUT");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.get("/",function(req,res){
    res.send({
        status : 200
    });
});

app.listen(1212,function(){
    console.log("App Started");
});