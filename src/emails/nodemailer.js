import nodemailer from "nodemailer";
import { htmlCode } from "./html.js";
export const sendEmail = async (options) => { 
const transporter = nodemailer.createTransport({
    service: "gmail",
    
    
    auth: {
      user: "hassni04114@gmail.com",
      pass: "vfxlnqphpwiztexy",
    },
  });
  
  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <hassni04114@gmail.com>', // sender address
      to: options.email, // list of receivers
            subject: "Hello world from salem", // Subject line
      
      html: htmlCode(`http://localhost:3000/verify/${options.email}`) // html body
    }) 
console.log("Message sent: %s", info)
}
