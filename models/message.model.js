import { model, Schema, SchemaTypes } from "mongoose";
 
 

const messageSchema = new Schema({


    recivedId:SchemaTypes.ObjectId, 
    messageText: {
      type: String,
      required: true,
      
    },
  
     
  },{timestamps: true});
  export const Message = model("Message", messageSchema);