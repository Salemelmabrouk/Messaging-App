import { User } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const { name, email, password ,age} = req.body;
    try {
        const user =await User.findOne({ email });
        if (user) {
            return res.json({ message: "Email already exists" });
        }
       let hashedPassword =  bcrypt.hashSync(password,8); 
 
     User.insertMany({ name, email, password: hashedPassword,age});
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

   let token=jwt.sign({name:user.name,userId:user._id},'MyNameIsSalem', );
        
              return  res.json({ message: "logged token" ,token:token});

        }
         

            res.json({ message: "incorrect email or password" });
      
       
    } catch (error) {    
        console.log(error);
        res.json({ message: "Internal Server Error" });
    }
}