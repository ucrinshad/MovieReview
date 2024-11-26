import mongoose, { Schema} from "mongoose";

const reviewSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    movieId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"movie",
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    comment:{
        type:String,
        trim:true,
        maxlength:500
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
},
)

export const Review = mongoose.model("Review", reviewSchema)