import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
import { addMovieToWishlist, getWishlist, removeMovieFromWishlist,  } from "../controllers/wishlistController.js";

const router = e.Router();

router.get("/get-wishlist", userAuth,getWishlist)
router.post("/add-to-wishlist",userAuth, addMovieToWishlist)
router.delete("/remove-wishlist-item",userAuth, removeMovieFromWishlist )


export {router as wishlistRouter};