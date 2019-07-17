var express = require('express'),
    mailer = require('../email'),
    userRoutes = express.Router();

var route = () => {

    userRoutes.route("/user")
        .get((req,res) => {
            //mailer('ashwinlaly@gmail.com','hello','hi');
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