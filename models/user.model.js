import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must be at least 3 characters long."]
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,

  },
  age: {
    type: Number,
    required: true,
    min: [18, "Age must be at least 18."],
    max: [100, "Age must be at most 100."]
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },

 
},{timestamps:true});
export const User = mongoose.model("User", userSchema);