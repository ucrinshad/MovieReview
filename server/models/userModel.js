import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    profilePic:{
        type:String,
        default:"https://st4.depositphotos.com/20523356/22445/v/450/depositphotos_224458104-stock-illustration-flat-user-icon-website-face.jpg"
    }

  },
{timestamps:true}
);

  export const User = mongoose.model('User',userSchema)