import cdnSchema from "../models/cdnModel.js"
import mongoose from 'mongoose'

const getAllCNDs = async(req, res)=>{
    const cdns = await cdnSchema.find({})
    res.status(200).json(cdns)
}

export { getAllCNDs }