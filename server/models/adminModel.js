import mongoose, { Types } from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
        profiePic: {
            type: String,
            default: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        },
        movies:[{type: mongoose.Types.ObjectId, ref: "Movies"}],
    },
    {timestamps: true}
); 

export const Admin = mongoose.model('Admin',adminSchema)