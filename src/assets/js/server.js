//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
    console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
    console.log("request came");
    let contact = req.body;
    sendMail(contact, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});

const sendMail = (contact, callback) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "juncosnicolas36@gmail.com",
            pass: "qxwxxknmspzycyws"
        }
    });
    const mailOptions = {
        from: `${contact.senderEmail}`,
        to: 'juncosnicolas36@gmail.com',
        subject: `${contact.subject}`,
        html: `<h3>Mensaje Recibido de ${contact.senderName}</h3>
        <p>
          <b>Emisor:</b> ${contact.senderEmail}
        </p>
        <p>
          <b>Asunto:</b> ${contact.subject}
        </p>
        <p>
          <b>Mensaje:</b> ${contact.message}
        </p>`
    };
    transporter.sendMail(mailOptions, callback);
}
