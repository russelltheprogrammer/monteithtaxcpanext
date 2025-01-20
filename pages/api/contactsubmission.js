
export default function handler(req, res) {
  require('dotenv').config();

  const userName = process.env.USERNAME;
  const clientIdCode = process.env.CLIENTIDCODE;
  const clientSecretCode = process.env.CLIENTSECRETCODE;
  const refreshTokenCode = process.env.REFRESHTOKENCODE;

  const nodemailer = require('nodemailer');
  const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: userName,
      clientId: clientIdCode,
      clientSecret: clientSecretCode,
      refreshToken: refreshTokenCode
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Ready to Send')
    }
  });

  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const email = req.body.email;
  const phonenumber = req.body.phoneNumber;
  const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: lastname + ',' + firstname,
    to: userName,
    subject: subject,
    html: `<p><b>Name:</b> ${lastname} , ${firstname}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Phone Number:</b> ${phonenumber}</p>
               <p><b>Message:</b> ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR, please contact the site administrator.'});
    }
    else {
      res.json({ status: 'Message Sent' });
    }
  });
}
