const nodemailer = require('nodemailer');

const createEmail = require('./utils');

nodemailer.createTestAccount(async (err, account) => {
    if(err) {
        console.error('Failed to create a testing account');
        console.error(err);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');
    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries

    // Create a SMTP transport object
    let transporter = nodemailer.createTransport({
        host: "smtp.163.com",
        port: 25,
        auth: {
            user: "camel_yangz@163.com",
            pass: "RBDLINMYUBNWZCNI"
        }
    },{
        // default message fields

        // sender info
        from: 'camel_yangz@163.com',
        headers: {
            'X-Laziness-level': 1000 // just an example header, no need to use this
        }
    });

    // Message object
    let message = {
        // Comma separated list of recipients
        to: ['camel_yangz@163.com', 'robbie.yang@hp.com', '1608367612@qq.com'],
        cc: 'camel_yangz@163.com',

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔' + Date.now(),

        // plaintext body
        text: 'Hello to myself!',

        // HTML body
        html: await createEmail(),

        list: {
            // List-Help: <mailto:admin@example.com?subject=help>
            help: 'admin@example.com?subject=help',

            // List-Unsubscribe: <http://example.com> (Comment)
            unsubscribe: [
                {
                    url: 'http://example.com/unsubscribe',
                    comment: 'A short note about this url'
                },
                'unsubscribe@example.com'
            ],

            // List-ID: "comment" <example.com>
            id: {
                url: 'mylist.example.com',
                comment: 'This is my awesome list'
            }
        }
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));

        // only needed when using pooled connections
        transporter.close();
    });
})