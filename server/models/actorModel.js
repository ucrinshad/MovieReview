import mongoose from "mongoose";


const actorSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        image:{
            type:String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWIgp-RhLQxtX4xNEpxQ8xp6VdLLVkxNjLg&s"

        },
        description:{
            type:String,  
        },
        born:{
            type:String,
            required:true
        },
        miniBio:{
            type:String,
            required:true
        },
        
        
        
        
        movies: [{ type: mongoose.Types.ObjectId, ref: "movies"}],
    },
    
);


export const Actor = mongoose.model("Actor", actorSchema )