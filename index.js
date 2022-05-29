const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

exports.handler = (event, context, callback) => {
    console.log('LOGS createTransport', {
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    const done = (err) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : 'No errorssss',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST'
        },
    });

    let mailOptions =  {
        from: 'noirkotyara@gmail.com', // sender address
        to: 'noirkotyara@gmail.com', // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world', // plaintext body
        html: '<b>Hello world</b>' // html body
    };

    transporter.sendMail(mailOptions, done(null));
};
