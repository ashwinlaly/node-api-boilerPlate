var express = require('express'),
    mailer = require('../email'),
    mongo = require('../mongodb'),
    userRoutes = express.Router();

var route = () => {

    userRoutes.route("/user")
        .get((req,res) => {
            mongo.get().collection('users').find({}).toArray()
            .then((users) => {
                    console.log('Users', users);
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