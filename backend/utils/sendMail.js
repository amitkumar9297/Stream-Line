const nodemailer = require('nodemailer');

async function sendMail(eMail) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });
    const info = transporter.sendMail({
        from: '"Stream-Line" <amitkumar790194@gmail.com>',
        to: eMail,
        text: "Thankyou for Registration",
        html: "<b>you successfully registered</b>"

    })


}

module.exports = sendMail