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
    service: 'gmail', // ou o serviço de email que você usa
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

app.post('/send', (req, res) => {
    const mailOptions = {
        from: req.body.email,
        to: 'seuemail@gmail.com',
        subject: 'Mensagem do Formulário de Contato',
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar o email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Email enviado com sucesso');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
