const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({  
  service:'Gmail',
  auth:{
    user: 'inep.inn@gmail.com',
    pass: 'T@npapassword',
  },
  secure: true
})

// const mailData = {
//   from: 'inep.inn@gmail.com',  // sender address
//     to: 'vee.qii@gmail.com',   // list of receivers
//     subject: 'Sending Email using Node.js',
//     text: 'Inep Inn Booking Guide',
//     html: '<b>Halo ! Terima kasih telah menghubungi kami, dalam waktu kurang 24 jam anda akan dihubungi oleh tim kami</b> <br>Hati hati yah :)<br/>',
// };

// transporter.sendMail(mailData, (error,info)=>{
//   if(error){
//     return console.log(error);
//   }
//   console.log('sent');  
// })

module.exports=transporter