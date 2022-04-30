const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
var twilio = require("twilio");

const app = express();
app.use(cors());
app.use(express.json());

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio(
  "ACa76abb884438927e89e11451adbb64a3",
  "679e433753eb42455a0dbd1ea35623fb"
);

//get all msg list
app.get("/", (req, res) => {
  client.messages.list({ limit: 20 }).then((messages) => {
    return res.status(200).send({
      Message: "SMS List",
      Results: messages,
      Status: true,
    });
  });
});

//send sms otp
app.post("/sms", (req, res) => {
  console.log(req.body);
  let number = req.body.number;
  let msg = req.body.text;
  // Send the text message.
  if (msg !== undefined) {
    client.messages
      .create({
        to: number,
        from: "+19706485889",
        body: msg,
      })
      .then((message) => {
        console.log(message.sid);
        return res.status(200).send({
          Message: "Msg send successfully",
          Results: message,
          Status: true,
        });
      });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
