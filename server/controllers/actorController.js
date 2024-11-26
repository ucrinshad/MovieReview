import { Actor } from "../models/actorModel.js";






export const getActorsList = async(req, res, next)=>{

    try {
        const Actors = await Actor.findOne();
        res.status(200).jsoon(Actors)
    } catch (error) {
        res.status(200).json({error: error.message});
    }
}

export const addActor = async(req, res, next)=>{
    try {
        const newActor = new Actor(req.body);
        const savedActor = await newActor.save();

        res.status(201).json(savedActor)

    } catch (error) {
        res.status(400).json({ message: error.message});
        
    }
}

export const getActorById = async(req,res,next)=>{
    try {
        const actor = await Actor.findById(req.params.id);
        if(actor){
            res.status(200).json(actor)
        }else{
            res.status(404).json({message:" actor not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateActor = async(req, res, next)=>{

    try {
        const updatedActor = await Actor.findByIdAndUpdate(req.params.id, req.body ,{ new: true});
        
        if(updatedActor){
            res.status(200).json(updatedActor);
        }else{
            res.status(404).json({ message: " actor not found "})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}   

export const deleteActor = async(req,res,next)=>{

    try {
        const deletedActor = await Actor.findByIdAndDelete(req.params.id);

        if(deletedActor) {
            res.status(200).json({ message: "actor deleted successfully"})
            res.status(404).json({message: "movoi not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
    