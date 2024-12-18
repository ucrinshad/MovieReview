



import { Movie } from "../models/movieModel.js";
import { Wishlist } from "../models/wishlist.js";


export const getWishlist = async (req, res) => {
    try {
      const userId = req.user.id;
  
      // Fetch the wishlist and populate movie details
      const wishlist = await Wishlist.findOne({ userId }).populate("movies.movieId");
  
      if (!wishlist) {
        return res.status(404).json({ message: "No wishlist found for this user" });
      }
  
      res.status(200).json({ message: "Wishlist fetched successfully", data: wishlist });
    } catch (error) {
      console.error("Error in getWishlist:", error.message, error.path, error.stack);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };





export const addMovieToWishlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { movieId } = req.body;

        // Validate movie existence
        const movie = await Movie.findById(movieId); // Movie should be your movie schema
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        // Find or create user's wishlist
        let wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            wishlist = new Wishlist({ userId, movies: [] });
        }

        // Check if movie already exists in the wishlist
        const movieExists = wishlist.movies.some((item) => item.movieId.equals(movieId));
        if (movieExists) {
            return res.status(400).json({ message: "Movie already in wishlist" });
        }

        // Add movie to wishlist
        wishlist.movies.push({ movieId });
        await wishlist.save();

        res.status(200).json({ message: "Movie added to wishlist", data: wishlist });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};




export const removeMovieFromWishlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { movieId } = req.body;

        // Find user's wishlist
        let wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        // Remove movie from wishlist
        wishlist.movie = wishlist.movie.filter((item) => !item.movieId.equals(movieId));
        await wishlist.save();

        res.status(200).json({ message: "Movie removed from wishlist" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
