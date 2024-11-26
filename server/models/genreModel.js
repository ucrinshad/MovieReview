import mongoose from "mongoose";


const genreSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        
        description:{
            type:String,
            
        },
        
        
        
        
        movies: [{ type: mongoose.Types.ObjectId, ref: "movie"}],
    },
    
);


export const Genre = mongoose.model("Genre", genreSchema )