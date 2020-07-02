const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'kamo.mkoyan.y@tumo.org',
        subject:'Welcome to Our app',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendEmailCancelation = (email, name) => {
    sgEmail.send({
        to:email,
        from:'kamo.mkoyan.y@tumo.org',
        subject:'Sorry to see you go! ',
        text:`Goodbye ${name}. I hope to see you back sometime soon.`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendEmailCancelation
}