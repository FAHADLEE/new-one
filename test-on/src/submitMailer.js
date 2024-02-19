const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const senderEmail = "nastaftechnologies@gmail.com";
const senderPassword = "cohqwsicyspwbvcl";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

app.post("/send-email", (req, res) => {
  const { email, subject, Names, Mobile, message } = req.body;

  const mailOptionssenderEmail = {
    from: senderEmail,
    to: senderEmail,
    subject: subject,
    text: `
    Name: ${Names}
    Email-ID: ${email}
    Mobile No: ${Mobile}

    ${Names} wrote the following message

    ${message}
    `,
  };
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: subject,
    text: `
    Dear ${Names},

    Thank you for contacting us!
    We'll get back to you within 24 hours.
    
    Kind regards,
    NASTAF Technologies✨`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Error sending email" });
    }
    console.log("Email sent: ", info.response);
    transporter.sendMail(mailOptionssenderEmail, (error, info) => {
      if (error) {
        return res.status(500).json({ error: "Error sending email" });
      }
      console.log("Email sent: ", info.response);
      res.status(200).json({ message: "Emails sent successfully" });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
