import { Message } from "../../../models/message.model.js";
import { sendEmail } from "../../emails/nodemailer.js";

 

export const addMessage = async (req, res) => {
  try {
    const { messageText, recivedId } = req.body;
  
    await Message.insertMany({ messageText, recivedId });
    res.json({ message: "Message sent successfully" });
    } catch (error) {   
        console.log(error);
        res.json({ error: "Something went wrong" });
    }
};


export const getUserMessage = async (req, res) => {

  
    const messages = await Message.find({ recivedId:req.userId }  
    )
    res.json({ message: "Message loaded successfully" , messages });
    
     
  };