const recordSchema = require('../models/recordModel')
const mongoose = require('mongoose')

// get all records
const getAllRecords = async(req, res)=>{
    try{
        const records = await recordSchema.find({}).sort({createdAt: -1})
        res.status(200).json(records)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}
// get a single record
const getSingleRecord = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleRecord = await recordSchema.findById(id)

    if(!singleRecord){
        return res.status(404).json({error: 'no such record'})
    }
    res.status(200).json(singleRecord)
}
// create a new record
const createRecord = async(req, res) =>{

    const {title, category} = req.body

    // let emptyFields = []

    // if(!title){
    //     return emptyFields.push('title')
    // }
    // if(!category){
    //     return emptyFields.push('category')
    // }
    // if(emptyFields.length>0){
    //     return res.status(404).json({error: 'please fill in ' + emptyFields})
    // }
    // add record to mongodb
    try{
        const record = await recordSchema.create({title, category})
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
module.exports = {
    createRecord, getSingleRecord, getAllRecords, deleteSingleRecord, updateSingleRecord
}