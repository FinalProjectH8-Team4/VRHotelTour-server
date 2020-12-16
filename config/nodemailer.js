const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({  
  service:'Gmail',
  auth:{
    user: 'inep.inn@gmail.com',
    pass: 'T@npapassword',
  },
  secure: true
})

module.exports=transporter