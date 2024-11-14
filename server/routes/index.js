import e from "express";
import { userRouter } from "./userRoutes.js";
import { adminRouter } from "./adminRoutes.js";
import { actorRouter } from "./actorRoutes.js";
import { movieRouter } from "./movieRoutes.js";


const router = e.Router()

router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/actor', actorRouter)
router.use('/movie', movieRouter)

export { router as apiRouter }