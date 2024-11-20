import e from "express";
import { createMovie, getAllMovies, getMovieDetails } from "../controllers/movieController.js";
import { upload } from "../middlewares/multer.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = e.Router();

router.get("/get-all-movies", getAllMovies);
router.get("/get-movieDetails/:movieId", getMovieDetails);
router.post("/create-movie",adminAuth, upload.single('image'),createMovie);
router.put("/update-movie",);
router.delete("/movie-delete");

router.get("/get-latest-movie");
router.get("/search-movies");



router.get('/check-user', )


export { router as movieRouter}