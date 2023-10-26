const domainSchema = require('../models/domainModel')
const mongoose = require('mongoose')

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
// create a new domain
const createDomain = async(req, res) =>{

    const { sitename, domainname } = req.body

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
    // add domain to mongodb
    try{
        const domain = await domainSchema.create({sitename,domainname})
        res.status(200).json(domain)
    } catch(err){
        res.status(400).json({error: err.message})
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
module.exports = {
    createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain
}