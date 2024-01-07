import cdnModale from "../models/cdnModale.js"
import mongoose from 'mongoose'

const getAllCNDs = async(req, res)=>{
    const cdns = await cdnModale.find({})
    res.status(200).json(cdns)
}

export { getAllCNDs }