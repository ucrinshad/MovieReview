import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
import { addreview, deleteReview, getAverageRating, getMovieReviews } from "../controllers/reviewController.js";

const router = e.Router();

router.post("/add-review", userAuth,addreview)
router.get("/get-movie-review", userAuth,getMovieReviews )
router.get("/get-user-review")
router.delete("/delete-review/:reviewId",userAuth,deleteReview)
router.get("get-avg-rating/:movieId",userAuth,getAverageRating)

export { router as reviewRouter}