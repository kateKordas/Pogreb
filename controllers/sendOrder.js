"use strict";

var nodemailer = require("nodemailer");

//TODO Create domain email account and replace gmail
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user: "qlpogreb@gmail.com",
    pass: "kf,jhfnjhbz"
  },
  tls: { rejectUnauthorized: false }
});


var letterSend = function (letterText) {

  //TODO FIX recipient email address
  let mailOptions = {
    from: "qlpogreb@gmail.com",
    to: "ekaterina.gargesyan@gmail.com",
    subject: "Заявка с сайта Погреб (основная) (pogreb.in.ua)",
    text: letterText
  };

  if(mailOptions.text != "favicon.ico"){
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
};

//TODO fix module export declaration (move to method "letterSend" declaration)
module.exports = {letterSend};