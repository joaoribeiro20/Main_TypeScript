const express = require('express');
const nodemailer = require("nodemailer");

const app = express()
const port = 3001



app.get('/send', async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "92a8da592b5c38",
          pass: "fe9c3dfe9ede6f"
        }
      });
      
      var men = {
        from: "noreplay@celke.com.br",
        to: "jvalves217@gmail.com",
        subject: "teste1",
        text: "ola teste",
        html: "<p>Joao</p>",
      }

     transporter.sendMail(men)
      res.send("enviado")
})
app.listen(port, () => console.log("http://localhost:3001/send"));