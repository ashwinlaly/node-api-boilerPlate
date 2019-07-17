var express = require('express'),
    mailer = require('../email'),
    user = require('../models/User'),
    userRoutes = express.Router();

var route = () => {

    userRoutes.route("/user")
        .get((req,res) => {
            //mailer('ashwinlaly@gmail.com','hello','hi');
            var us = new user({
                name : 'as',
                email : 'ashwinlaly@gmail.com'
            });
            us.save((err, res) => {
                if(err){
                    console.log('insert failed');
                } else {
                    console.log('insert sucess');
                }
            });
            res.send({
                message : "Hey",
                status : 200
            });
        })
        .post((req,res) => {

        })
    
    userRoutes.route("/user/:id")
        .get((req,res) => {
            res.send({
                userid : req.params.id
            });
        })
        .post((req,res) => {

        })

    return userRoutes;

}

module.exports = route;