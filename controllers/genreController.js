import genreSchema from "../models/genreModel.js"
import mongoose from 'mongoose'

const getAllGenres = async(req, res)=>{
    const genres = await genreSchema.find({})
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

export { getAllGenres, createGenre }