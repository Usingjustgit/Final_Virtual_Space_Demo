const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/send/mail",async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'hobart.effertz0@ethereal.email',
            pass: 'DZ8eAJm6Sx6Fy8vJV2'
        }
    });

    const info = await transporter.sendMail({
        from : "'I Man' <xyz@exampal.com> ",
        to : "",
        subject : "testing the email sending...",
        text : "Hello How are you...",
        html : "<h3>This is a html tag to implamenting the email sendign...</h3>"
    })

    console.log(info.messageId);
    res.status(200).json({success : true, message : "Mail is sending successfully..."});
});

router.get("/index",async (req, res) => {
    res.status(200).json({success : true, message : "This is default home page."});
})

module.exports = router;