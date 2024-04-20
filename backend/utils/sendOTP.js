const nodemailer = require('nodemailer');
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}
// Function to send OTP via email
function sendOTP(eMail, OTP) {
    // const OTP = generateOTP();
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    // Send mail with defined transport object
    transporter.sendMail({
        from: '"Stream-Line" <amitkumar790194@gmail.com>',
        to: eMail,
        subject: "Thank you for Registration",
        // text: `Please enter ${OTP} to verify your account.`,
        html: `<h1>You have successfully registered</h1> <h2>Please enter ${OTP} to verify your account</h2>`
    })
        .then(info => {
            console.log("Email sent: ", info.response);
        })
        .catch(error => {
            console.error("Error sending email: ", error);
        });

    // return OTP;
}
module.exports = sendOTP;