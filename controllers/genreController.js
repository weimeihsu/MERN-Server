import genreSchema from "../models/genreModel.js"
import mongoose from 'mongoose'

const getAllGenres = async(req, res)=>{
    const genres = await genreSchema.find({})
    res.status(200).json(genres)
}

export { getAllGenres }