const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: " **EMAIL** ",
        pass: " **SENHA** "
    },
});

transporter.sendMail({
    from: " **NOME** < **EMAIL** >",
    to: " **EMAIL** ",
    subject: " **ASSUNTO** ",
    text: " **TEXTO** ",
}).then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});
