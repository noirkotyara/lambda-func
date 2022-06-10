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

// exports.handler = ;

module.exports = {
    handler: (event, context, callback) => {
        console.log('LOGS createTransport TEST', {
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        console.log('LOGS EVENT', event)
        console.log('LOGS CONTEXT', context)
        console.log('LOGS CALLBACK', callback)

        const done = () => callback(null, {
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

        transporter.sendMail(mailOptions, done);
    }

}
