import recordSchema from '../models/recordModel.js'
import mongoose from 'mongoose'
// const recordSchema = require('../models/recordModel')
// const mongoose = require('mongoose')

// get all records
const getAllRecords = async(req, res)=>{
    try{
        const records = await recordSchema.find({}).sort({updatedAt: -1})
        res.status(200).json(records)
        // redis cache
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// create a new record backup
const createRecordImg = async(req, res) =>{
    const {title, genre, img} = req.body

    try{
        const record = await recordSchema.create({title, genre, img})
        res.status(200).json(record)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}
// create a new record backup
const createRecord = async(req, res) =>{
    const {title, genre, img} = req.body
    console.log(req.body)
    try{
        const record = await recordSchema.create({title, genre, img})
        res.status(200).json(record)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}
// delete a single record
const deleteSingleRecord = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const singleRecord = await recordSchema.findOneAndDelete({_id:id})

    if(!singleRecord){
        return res.status(404).json({error: 'no such record'})
    }
    res.status(200).json(singleRecord)
}
// update a signle record
const updateSingleRecord = async (req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleRecordUpdate = await recordSchema.findOneAndUpdate({_id:id}, {...req.body})

    if(!singleRecordUpdate){
        return res.status(404).json({error: 'no such record'})
    }
    res.status(200).json(singleRecordUpdate)
}

const genreFilter = async(req, res)=>{
    try{
        const { genre } = req.params
        const result = await recordSchema.find({genre:genre})
        res.status(200).json(result)
    }catch(err){
        res.status(404).json(err.message)
    }
}

const updateRecordGenre = async (req, res)=>{
    const { oldGenre } = req.query
    const { genre } = req.body
    // Model.findOneAndUpdate({filter}, {update}, {new:true}) new:true return the updated value
    const result = await recordSchema.updateMany({genre:oldGenre}, {genre:genre})

    res.status(200).json(result)
}
// module.exports = {
//     createRecord, getSingleRecord, getAllRecords, deleteSingleRecord, updateSingleRecord
// }

export {
    createRecord, getAllRecords, deleteSingleRecord, updateSingleRecord, updateRecordGenre, genreFilter
}