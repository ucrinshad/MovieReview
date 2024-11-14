import mongoose from "mongoose";


const movieSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:50,
    },
    
        descriptoin:{
            type:String,
            required:true,
            minLength:3,
            maxLength:100,
        },
        Duration:{
            tupe:String,
            required:true
        },
        image:{
            type:String,
            default:"https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"
        },
        admin:{ type: mongoose.Types.ObjectId, ref: "Admin"},
    },
    {timestamps: true}
);

export const Movie = mongoose.model("Movie", movieSchema)