const nodemailer = require('nodemailer');
const compileEmailTemplate  = require('./compile-email-template');



const sendMail = async (req,res)=>{
     const datas= req.body?.formData;
     console.log("dara",datas);
     const template = await compileEmailTemplate({
        fileName: 'email-template.mjml',
        data: {
          name: datas.name,
          email:datas.email,
          mobileNo:datas.mobileNo
        }, 
      });
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 587,
        auth: {
            user: 'signup@edukateus.com',
            pass: 'Rahul@123'
        },
      });
      const info = await transporter.sendMail({
        // from: '<no-reply@sequelstring.com>', // sender address
        from: '"Advocate 🎗" <signup@edukateus.com>', // sender address
        to: "kashishsaini8278@gmail.com", // list of receivers
        subject: "Campaign Data", // Subject line
        html: template, // html body
      });
    
    res.status(200).json({"info":info})
}

module.exports=sendMail;