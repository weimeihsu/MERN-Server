import siteSchema from '../models/siteModel.js'
import mongoose from 'mongoose'
// const siteSchema = require('../models/siteModel')
// const mongoose = require('mongoose')

// get all sites
const getAllSites = async(req, res)=>{
    const sites = await siteSchema.find({}).sort({createdAt: -1})
    
    res.status(200).json(sites)
}
// get a single site
const getSingleSite = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleSite = await siteSchema.findById(id)

    if(!singleSite){
        return res.status(404).json({error: 'no such site'})
    }
    res.status(200).json(singleSite)
}
// create a new site
const createSite = async(req, res) =>{
    const { sitename } = req.body

    try{
        const site = await siteSchema.create({sitename})
        res.status(200).json(site)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}
// delete a single site
const deleteSingleSite = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const singleSite = await siteSchema.findOneAndDelete({_id:id})

    if(!singleSite){
        return res.status(404).json({error: 'no such site'})
    }
    res.status(200).json(singleSite)
}

// update a signle site
const updateSingleSite = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleSiteUpdate = await siteSchema.findOneAndUpdate({_id:id}, {...req.body})

    if(!singleSiteUpdate){
        return res.status(404).json({error: 'no such site'})
    }
    res.status(200).json(singleSiteUpdate)
}
// module.exports = {
//     createSite, getSingleSite, getAllSites, deleteSingleSite, updateSingleSite
// }
 export { createSite, getSingleSite, getAllSites, deleteSingleSite, updateSingleSite }
