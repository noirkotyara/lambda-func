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

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST'
        },
    });

    let _body = JSON.parse(event.body);

    let body_txt='<h2>Contact Form Details</h2>';
    for (const key in _body) {
        const res = key.replace("_", " ");
        body_txt +='<p><strong>' + titleCase(res) +' : </strong>'+_body[key] + '</p>';
    }


    let mailOptions = {
        from: 'noirkotyara@gmail.com',
        to: 'noirkotyara@gmail.com',
        subject: 'SUBJECT',
        html: body_txt
    };

    transporter.sendMail(mailOptions, done(null,_body));
};

// convert the key as the label
function titleCase(str) {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // return the joined string
    return splitStr.join(' ');
}
