import mongoose, { Types } from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        name:{
            Types:String,
            
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
        movies:[{type: mongoose.Types.ObjectId, ref: "Movies"}],
    },
    {timestamps: true}
); 

export const Admin = mongoose.model('Admin',adminSchema)