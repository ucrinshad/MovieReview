import express from "express";


import { addActor, deleteActor, getActorsList, updateActor } from "../controllers/actorController.js";
import { adminAuth } from "../middlewares/adminAuth.js";


const router = express.Router()

router.post('/actorsList',  getActorsList)
router.post('/add', adminAuth,addActor)
router.put('/update/:id', adminAuth,updateActor)

router.get('/delete',adminAuth, deleteActor )




export { router as actorRouter}