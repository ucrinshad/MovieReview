import e from "express";
import { checkUser, deleteUser, getUsersList, updateUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userController.js";
import { userAuth } from "../middlewares/userAuth.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = e.Router();


router.post('/signup', userSignup)
router.post('/login', userLogin)
router.put('/reset-password')
router.put('/logout',userAuth, userLogout)
router.get('/profile',userAuth, userProfile )
router.put('/profile-update/:id',userAuth,updateUser)
router.delete('/delete-user/:id',adminAuth,deleteUser )



router.get('/check-user',userAuth,checkUser )


export { router as userRouter}