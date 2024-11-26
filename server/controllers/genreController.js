import { Genre } from "../models/genreModel.js";






export const getGenresList = async(req, res, next)=>{

    try {
        const Genres = await Genre.findOne();
        res.status(200).jsoon(Genres)
    } catch (error) {
        res.status(200).json({error: error.message});
    }
}

export const addGenre = async(req, res, next)=>{
    try {
        const newGenre = new Genre(req.body);
        const savedGenre = await newGenre.save();

        res.status(201).json(savedGenre)

    } catch (error) {
        res.status(400).json({ message: error.message});
        
    }
}

export const getGenreById = async(req,res,next)=>{
    try {
        const Genre = await Genre.findById(req.params.id);
        if(Genre){
            res.status(200).json(Genre)
        }else{
            res.status(404).json({message:" Genre not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateGenre = async(req, res, next)=>{

    try {
        const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, req.body ,{ new: true});
        
        if(updatedGenre){
            res.status(200).json(updatedGenre);
        }else{
            res.status(404).json({ message: " Genre not found "})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}   

export const deleteGenre = async(req,res,next)=>{

    try {
        const deletedGenre = await Genre.findByIdAndDelete(req.params.id);

        if(deletedGenre) {
            res.status(200).json({ message: "Genre deleted successfully"})
            res.status(404).json({message: "movoi not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
    