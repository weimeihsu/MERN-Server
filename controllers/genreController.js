import genreSchema from "../models/genreModel.js"
import mongoose from 'mongoose'

const getAllGenres = async(req, res)=>{
    const genres = await genreSchema.find({}).sort({createdAt: -1})
    res.status(200).json(genres)
}

const createGenre = async (req, res) =>{
    const { name } = req.body
    try{
        const theGenre = await genreSchema.create({ name })
        res.status(200).json(theGenre)
    } catch(err){
        res.status(400).json(err.message)
    }
}

const updateGenre = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const theUpdatedGenre = await genreSchema.findOneAndUpdate({_id:id}, {...req.body})

    if(!theUpdatedGenre){
        return res.status(404).json({error: 'no such genre'})
    }
    res.status(200).json(theUpdatedGenre)
}

const deleteGenre = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const theGenre = await genreSchema.findOneAndDelete({_id:id})

    if(!theGenre){
        return res.status(404).json({error: 'no such genre'})
    }
    res.status(200).json(theGenre)
}
export { getAllGenres, createGenre, deleteGenre, updateGenre }