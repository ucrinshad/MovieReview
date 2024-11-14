import e from "express";
import { adminLogin, adminLogout, adminProfile, adminSignup, checkAdmin } from "../controllers/adminController.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = e.Router();

router.post('/signup',adminSignup )
router.post('/login', adminLogin)
router.put('/reset-password')
router.put('/logout',adminAuth,adminLogout)
router.get('/profile',adminAuth,adminProfile )
router.put('/profile-update')
router.delete('/delete-account', )


router.get('/check-admin',adminAuth,checkAdmin )


export { router as adminRouter}