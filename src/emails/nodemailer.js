import nodemailer from "nodemailer";
import { htmlCode } from "./html.js";
import jwt from  'jsonwebtoken'
export const sendEmail = async (options) => { 
const transporter = nodemailer.createTransport({
    service: "gmail",
     
    auth: {
      user: "hassni04114@gmail.com",
      pass: "vfxlnqphpwiztexy",
    },
  });
  
  
    // send mail with defined transport object
    var token=jwt.sign({email:options.email },process.env.JWT_SECRET)
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <hassni04114@gmail.com>', // sender address
      to: options.email, // list of receivers
            subject: "Hello world from salem", // Subject line
      
      html: htmlCode(`http://localhost:3000/verify/${token}`) // html body
    }) 
console.log("Message sent: %s", info)
}
