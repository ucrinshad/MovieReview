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
        const { title, description, duration,releaseDate, image, admin,genres,writer,director,cast } = req.body;

        const adminId = req.user.id;
        

        if (!title || !description|| !duration ||!director) {
            return res.status(400).json({ message: "all fields required" });
        }

        console.log(req.file ,"====req.file");
        
        const imageUrl = (await cloudinaryInstance.uploader.upload(req.file.path)).url;
        
        

        const movieData = new Movie({ title, description,genres,releaseDate, duration,writer, director, image:imageUrl, admin:adminId });
        await movieData.save();

        return res.json({ message: "movie data fetched", data: movieData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const updateMovie = async(req, res, next)=>{

    try {
        const { title, image, description,duration,writer,releaseDate,director,cast,genres ,admin } = req.body
        const { id } = req.params

        const updatedMovie = await Movie.findByIdAndUpdate(id,{ title, image, description,duration,writer,releaseDate,director, admin, $push:{cast:cast,genres:genres} } ,{ new: true});
        
        if(updatedMovie){
            res.status(200).json(updatedMovie);
        }else{
            res.status(404).json({ message: " movie not found "})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}   

export const deleteMovie = async(req,res,next)=>{

    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

        if(deletedMovie) {
            res.status(200).json({ message: "movie deleted successfully"})
            res.status(404).json({message: "movoi not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}