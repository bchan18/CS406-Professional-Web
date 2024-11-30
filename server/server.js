const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const path = require('path');
require("dotenv").config();

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD, 
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log("Error verifying transporter:", err);
  } else {
    console.log(`Server ready to send messages: ${success}`);
  }
});

app.post("/send", (req, res) => {
  const { email, message } = req.body.mailerState;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from: ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error sending mail:", err);
      res.json({ status: "fail" });
    } else {
      console.log("Message sent:", info.response);
      res.json({ status: "success" });
    }
  });
});
 
 const port = 5000;
 app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
 });

 app.use(express.static(path.join(__dirname, 'client/build')));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});