import express from "express";
import { addGenre, deleteGenre, getGenresList, updateGenre } from "../controllers/genreController.js";
import { adminAuth } from "../middlewares/adminAuth.js";



const router = express.Router()

router.post('/genreList', getGenresList )
router.post('/add', adminAuth,addGenre)
router.get('/update/:id', adminAuth,updateGenre)

router.get('/delete',adminAuth,  deleteGenre)





export default router 