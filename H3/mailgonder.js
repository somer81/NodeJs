var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sevinc.omer@gmail.com',
    pass: '*******'
  }
});

var mailOptions = {
  from: 'sevinc.omer@gmail.com',
  to: 'mertaksu8118@gmail.com',
  subject: 'Bu Email Node.js ile gönderildi',
  text: 'Basit bir iş değil mi !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email gönderildi: ' + info.response);
  }
});
