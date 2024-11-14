import e from "express";
import { checkUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userController.js";
import { userAuth } from "../middlewares/userAuth.js";

const router = e.Router();

router.post('/signup', userSignup)
router.post('/login', userLogin)
router.put('/reset-password')
router.put('/logout',userAuth, userLogout)
router.get('/profile',userAuth, userProfile )
router.put('/profile-update')
router.delete('/delete-account', )


router.get('/check-user',userAuth,checkUser )


export { router as userRouter}