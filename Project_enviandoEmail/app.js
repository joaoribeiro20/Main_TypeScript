const express = require('express');
const nodemailer = require("nodemailer");

const app = express()
const port = 3000



app.get('/send', async (req, res) => {
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "92a8da592b5c38",
          pass: "fe9c3dfe9ede6f"
        }
      });

     transporter.sendMail({
        from: "noreplay@celke.com.br",
        to: "joao@celke.com.br",
        subject: "teste1",
        text: "ola teste",
        html: "<h1>Joao</h1>",
      })
      res.send("enviado")
})
app.listen(port, () => console.log("..........."));