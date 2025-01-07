import { Movie } from "../models/movieModel.js";
import { Review } from "../models/reviewModel.js";


export const getAllReviews = async (req, res, next) => {
    try {
        const reviewList = await Review.find();

        res.json({ message: "review-list fetched", data: reviewList });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const addreview = async(req,res)=>{
    try{
        const {movieId,rating,comment} = req.body;
        const userId = req.user.id;

        //validates if the movie exist
        const movie = await Movie.findById(movieId);
        if(!movie){
            return res.status(404).json({message:"movie not found"})
        }
        if(rating>5 || rating <=1){
            return res.status(400).json({message:"please provide a proper review"})
        }

        //create  or update the review
        const review = await Review.findOneAndUpdate(
            {userId, movieId},
            {rating, comment},
            {new:true, upsert:true}
        );
        //optionally , you can update the movie's average rating here
        res.status(201).json({message:"review created successfully", data:review});
    }catch(error){
        res.status(500).json({message:"internal server error", error})
    }
};

export const getMovieReviews = async(req,res)=>{
    try{
        const{ movieId} = req.params;

        const reviews = await Review.find({movieId})
        .populate("userId", "name")
        .sort({createdAt: -1}); //for latest review

        if(!reviews.length){
            return res.status(404).json({message:"no reviews found for this movie"})
        }

        res.status(200).json({message: "review created successfully"})
    }catch(error){
        res.status(500).json({message:"internal server error", error})
    }
}

export const getUserReviews = async(req,res)=>{
    try{
        const{ movieId} = req.params;

        const reviews = await Review.find({movieId})
        .populate("userId", "name")
        .sort({createdAt: -1}); //for latest review

        if(!reviews.length){
            return res.status(404).json({message:"no reviews found for this movie"})
        }

        res.status(200).json({message: "review created successfully"})
    }catch(error){
        res.status(500).json({message:"internal server error", error})
    }
}

export const deleteReview = async(req,res)=>{
    try{
        const {reviewId} = req.params;
        const userId = req.user.id

        const review = await Review.findOneAndDelete({_id:reviewId ,userId });

        if(!review){
            return res.status(404).json({message:"review not foud or not authorised"});
        }

        res.status(404).json({message:"review deleted successfully"});
    }catch(error){
        res.status(500).json({message:"internal sever error",error});
    }
};

export const getAverageRating = async(req,res) =>{
    try{
        const {movieId} = req.params;

        const reviews = await Review.find({movieId})

        if(!reviews.length){
            return res.status(404).json({message:"no review found for this movie"})
        }

        const averageRating = reviews.reduce((sum,review) => sum+review.rating, 0) / reviewa.length;
        res.status(200).json({ message:"average review fetched",data:averageRating});
    }catch(error){
        res.status(500).json({message:"internal server error",error});
    }
}

export const searchMovies = async (req, res) => {
    try {
        const { movieId } = req.params;

        // Basic search for title or genre
        const movies = await Movie.find({
            $or: [
                { title: { $regex: query, $options: "i" } }, // Case-insensitive search
                { genre: { $regex: query, $options: "i" } }
            ]
        });

        if (!movies.length) {
            return res.status(404).json({ message: "No movies found" });
        }

        res.status(200).json({ message: "Movies found", data: movies });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};