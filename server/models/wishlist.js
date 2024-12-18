import mongoose, { Schema } from "mongoose";

const wishlistSchema = new Schema({
    userId: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    movies: [
        {
            movieId:{
                type:Schema.Types.ObjectId,
                ref:"Movie",
                required:true
            },
            
        }
    ],

});

export const Wishlist =  mongoose.model("Wishlist",wishlistSchema);