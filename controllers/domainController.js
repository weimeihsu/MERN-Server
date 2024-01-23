import domainSchema from '../models/domainModel.js'
import mongoose from 'mongoose'
// const domainSchema = require('../models/domainModel')
// const mongoose = require('mongoose')

// get all domains
const getAllDomains = async(req, res)=>{
    const domains = await domainSchema.find({}).sort({createdAt: -1})
    res.status(200).json(domains)
}
// get a single domain
const getSingleDomain = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleDomain = await domainSchema.findById(id)

    if(!singleDomain){
        return res.status(404).json({error: 'no such domain'})
    }
    res.status(200).json(singleDomain)
}
// get domains by sitename
const domainFilter = async(req, res)=>{
    try{
        const { site } = req.params
        const domains = await domainSchema.find({sitename:site})
        res.status(200).json(domains)
    }catch(err){
        res.status(404).json(err.message)
    }
}
// const searchDomains = async(req, res)=>{
//     try{
//         console.log(req.query)
//         const { domainname } = req.query 
//         // this is a descructure of { domainname : value }
//         const domains = await domainSchema.find({
//             '$or':[
//                 {domainname:{$regex:`${domainname}`, $options:'i'}},
//                 // {domainname:{$regex:`${domainname}`, $options:'i'}},
//             ]})
//         res.status(200).json(domains)
//     }catch(err){
//         res.status(404).json(err.message)
//     }
// }
// create a new domain
const createDomain = async (req, res) =>{

    const { sitename, domainname } = req.body
    // const { domain } = req.body
    try{
        const domain = await domainSchema.create({ sitename, domainname })
        res.status(200).json(domain)
    } catch(err){
        res.status(400).json(err.message)
    }
}
// delete a single domain
const deleteSingleDomain = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const singleDomain = await domainSchema.findOneAndDelete({_id:id})

    if(!singleDomain){
        return res.status(404).json({error: 'no such domain'})
    }
    res.status(200).json(singleDomain)
}

// update a signle domain
const updateSingleDomain = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleDomainUpdate = await domainSchema.findOneAndUpdate({_id:id}, {...req.body})

    if(!singleDomainUpdate){
        return res.status(404).json({error: 'no such domain'})
    }
    res.status(200).json(singleDomainUpdate)
}
// module.exports = {
//     createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain
// }

export { createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain, domainFilter}