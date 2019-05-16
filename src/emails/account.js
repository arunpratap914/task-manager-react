const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "arun.pratap914@gmail.com",
    subject: "Thanks for joining us",
    text: `Welcom to the app, ${name}. Let me know how you get along with the app`
  });
};

const sendAcoountRemoveEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "arun.pratap914@gmail.com",
    subject: "What is wrong with you",
    text: `Go away from the app, ${name}.`
  });
};

module.exports = {
  sendWelcomEmail,
  sendAcoountRemoveEmail
};
