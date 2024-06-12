const nodemailer = require('nodemailer');
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MY_EMAIL } = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // Use true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

const sendAuthEmail = async (email, token) => {
  const url = `${process.env.CLIENT_URL}/auth/verify?token=${token}`;
  await transporter.sendMail({
    from: MY_EMAIL,
    to: email,
    subject: 'Login to Your Account',
    html: `<p>Click <a href="${url}">here</a> to login to your account.</p>`,
  });
};

module.exports = { sendAuthEmail };
