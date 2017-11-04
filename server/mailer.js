const nodemailer = require('nodemailer');


nodemailer.createTestAccount((err, account) => {

   
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: "thenonprofit40@gmail.com", 
            pass: "this is my password"  
        }
    });
    
    
    let mailOptions = {
        from: '"The Non Profit" <thenonprofit40@gmail.com>', // sender address
        to: 'alextingey1@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>"Hello world?"</b>' // html body
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
});