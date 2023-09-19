

const express = require('express');
const nodemailer = require("nodemailer");

const app = express()
const port = 3001




app.get('/index.html', async (req, res) => {
    res.sendFile(__dirname + "/index.html");
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",	
        port: 587,
        secure: false,
        auth: {
          user: "@outlook.com",//para subir para o git removi o hotmail, porem basta colocar a o hotmail certa para enviar os email
          pass: ""//para subir para o git removi a senha, porem basta colocar a senha certa para enviar os email
        }
      });
      
      var men = {
        from: "@outlook.com",//para subir para o git removi o hotmail, porem basta colocar a o hotmail certa para enviar os email
        to: "jvalves217@gmail.com",
        subject: "Obrigado pelo feedback",
        text: "",
        html: "<h1>Seu feedback sera de grande valia para mim e meu desenvolvimento profissonal. caso tenha qualquer duvida entre em contato atraves desse email mesmo...</h1>",
      }

      transporter.sendMail(men)
      
})
app.listen(port, () => console.log("http://localhost:3001/index.html"));