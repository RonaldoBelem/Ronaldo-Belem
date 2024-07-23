const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configurar o Nodemailer
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:"25",
    secure:false,
    service: 'gmail', // ou o serviço de email que você usa
    auth: {
        user: 'ronaldonunes8@gmail.com', // Seu email
        pass: 'qvwo dqrd zxfn nipx' // Sua senha
    }
});

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'ronaldonunes8@gmail.com', // Seu email
        subject: 'Mensagem do Formulário de Contato',
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar o email:', error);
            res.status(500).send('Erro ao enviar o email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Email enviado com sucesso');
        }
    });
});

app.listen(port,  () => {
    console.log(`Servidor rodando na porta ${port}`);
});
