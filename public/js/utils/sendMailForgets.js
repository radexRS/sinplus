const nodemailer = require('nodemailer')


function sendMailForgets(email, forgets) {  

    const admin = 'email@gmail.com'
    const pass = '123456789'
    const user = email

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: admin, 
            pass: pass
        }
    })

    transporter.sendMail({
        from: admin,
        to: user,
        secure: false,
        subject: 'Olá, Seja bem vindo!',
        html: '<h3>Copie o Código ' + forgets + ' para redefinir sua senha.</h3>'
        
        })            
    }
 
    module.exports = sendMailForgets