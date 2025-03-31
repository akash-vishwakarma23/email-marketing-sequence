const nodemailer  = require('nodemailer');

// create reusable transporter object using the default SMTP transport  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'process.env.EMAIL_USER',
      pass: '   process.env.EMAIL_PASS'
    }
  });

  // setup email data with unicode symbols  
  export const sendEmail = async ({ email, subject, body }) => {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text: body,
    });
};