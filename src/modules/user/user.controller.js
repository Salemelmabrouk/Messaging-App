import { User } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../emails/nodemailer.js";


export const signup = async (req, res) => {
    const { name, email, password ,age} = req.body;
    try {
        const user =await User.findOne({ email });
        if (user) {
            return res.json({ message: "Email already exists" });
        }
       let hashedPassword =  bcrypt.hashSync(password,8); 

    
     User.insertMany({ name, email, password: hashedPassword,age});
     sendEmail({email})
     res.json({ message: "User created successfully" });
       } catch (error) {    
        console.log(error);
        res.json({ message: "Internal Server Error" });
    }
}

export const signin= async (req, res) => {
    const {  email, password } = req.body;
    try {
        const user =await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {

   let token=jwt.sign({name:user.name,userId:user._id},process.env.JWT_SECRET );
        
              return  res.json({ message: "logged token" ,token:token});

        }
         

            res.json({ message: "incorrect email or password" });
      
       
    } catch (error) {    
        console.log(error);
        res.json({ message: "Internal Server Error" });
    }


  
}  


export const verifyemail= async (req,res) => { 
    const {token}=req.params
    jwt.verify(token,process.env.JWT_SECRET,async(err,decoded) => {
        if(err)  return res.json( err ) 
          await User.findOneAndUpdate({email: decoded.email}, {verified: true})
        res.json({message: "Email verified successfully"})   
        }) 
        
     }