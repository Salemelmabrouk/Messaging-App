import { Message } from "../../../models/message.model.js";

 

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
    try {
      const { recivedId } = req.body; 
    const messages = await Message.find({ recivedId }  
    )
    res.json({ message: "Message loaded successfully" , messages });
      } 
      catch (error) {   
          console.log(error);
          res.json({ error: "Something went wrong" });
      }
  };