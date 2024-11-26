import e from "express";
import { adminLogin, adminLogout, adminProfile, adminSignup, checkAdmin, updateAdmin } from "../controllers/adminController.js";
import { adminAuth } from "../middlewares/adminAuth.js";
import { getAllMovies } from "../controllers/movieController.js";

const router = e.Router();

router.post('/signup',adminSignup )
router.post('/login', adminLogin)
router.put('/reset-password')
router.put('/logout',adminAuth,adminLogout)
router.get('/profile',adminAuth,adminProfile )
router.put('/profile-update/:id',adminAuth,updateAdmin)
router.delete('/delete-account', )

router.get('/fetch-usersList')
router.get('all-moviesList',adminAuth,getAllMovies)
router.put('user-freeze/:userid')


router.get('/check-admin',adminAuth,checkAdmin )


export { router as adminRouter}