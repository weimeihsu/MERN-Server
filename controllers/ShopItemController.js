import shopItemSchema from '../models/shopItemModel.js'
import mongoose from 'mongoose'
// const shopItemSchema = require('../models/shopItemModel')
// const mongoose = require('mongoose')

// get all shopItems
const getAllShopItems = async(req, res)=>{
    const shopItems = await shopItemSchema.find({}).sort({createdAt: -1})
    
    res.status(200).json(shopItems)
}
// get a single shopItem
const getSingleShopItem = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleShopItem = await shopItemSchema.findById(id)

    if(!singleShopItem){
        return res.status(404).json({error: 'no such shopItem'})
    }
    res.status(200).json(singleShopItem)
}
// create a new shopItem
const createShopItem = async(req, res) =>{

    const { name, price, category, inventory } = req.body

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
    // add shopItem to mongodb
    try{
        const shopItem = await shopItemSchema.create({name, price, category, inventory})
        res.status(200).json(shopItem)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}
// delete a single shopItem
const deleteSingleShopItem = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const singleShopItem = await shopItemSchema.findOneAndDelete({_id:id})

    if(!singleShopItem){
        return res.status(404).json({error: 'no such shopItem'})
    }
    res.status(200).json(singleShopItem)
}

// update a signle shopItem
const updateSingleShopItem = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleShopItemUpdate = await shopItemSchema.findOneAndUpdate({_id:id}, {...req.body})

    if(!singleShopItemUpdate){
        return res.status(404).json({error: 'no such shopItem'})
    }
    res.status(200).json(singleShopItemUpdate)
}
// module.exports = {
//     createShopItem, getSingleShopItem, getAllShopItems, deleteSingleShopItem, updateSingleShopItem
// }

export { createShopItem, getSingleShopItem, getAllShopItems, deleteSingleShopItem, updateSingleShopItem }