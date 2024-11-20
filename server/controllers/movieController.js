import { cloudinaryInstance } from "../config/cloudinary.js";
import { Movie } from "../models/movieModel.js";

export const getAllMovies = async (req, res, next) => {
    try {
        const movieList = await Movie.find();

        res.json({ message: "movie-list fetched", data: movieList });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getMovieDetails = async (req, res, next) => {
    try {
        const { movieId } = req.params;

        const movieData = await Movie.findById(movieId).populate("admin");

        res.json({ message: "movie data fetched", data: movieData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const createMovie = async (req, res, next) => {
    try {
        const { title, description, duration, image, admin } = req.body;

        const adminId = req.user.id;
        

        if (!title || !description|| !duration) {
            return res.status(400).json({ message: "all fields required" });
        }

        console.log(req.file ,"====req.file");
        
        const imageUrl = (await cloudinaryInstance.uploader.upload(req.file.path)).url;
        
        

        const movieData = new Movie({ title, description, duration, image:imageUrl, admin:adminId });
        await movieData.save();

        return res.json({ message: "movie data fetched", data: movieData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};