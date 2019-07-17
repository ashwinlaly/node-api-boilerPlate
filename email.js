var email = require('nodemailer'),
    config = require('./config').email;

var mailer = (to,subject,text) => {
    
    var transport = email.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth : {
            user : config.email,
            pass : config.password
        }
    });

    var sender = {
        to : to,
        from : config.email.email,
        subject : subject,
        text : text
    };

    transport.sendMail(sender, (err, res) => {
        if(err){
            console.log("Error in Mail sent");
        } else {
            console.log("Mail sent");
        }
    });
}

module.exports = mailer;