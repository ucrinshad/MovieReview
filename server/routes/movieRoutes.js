import e from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieDetails, updateMovie } from "../controllers/movieController.js";
import { upload } from "../middlewares/multer.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = e.Router();

router.get("/get-all-movies", getAllMovies);
router.get("/get-movieDetails/:movieId", getMovieDetails);
router.post("/create-movie",adminAuth, upload.single('image'),createMovie);
router.put("/update-movie/:id",adminAuth,updateMovie);
router.delete("/movie-delete/:id",adminAuth,deleteMovie);

router.get("/get-latest-movie");
router.get("/search-movies");



router.get('/check-user', )


export { router as movieRouter}