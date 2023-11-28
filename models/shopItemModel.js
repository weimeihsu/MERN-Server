import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shopItemSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        require:true
    },
    category: {
        type:String,
        required: true
    },
    inventory: {
        type:Number,
        require: true
    }
}, {timestamps: true})

// module.exports = mongoose.model('shopItemSchema', shopItemSchema)
export default mongoose.model('shopItemSchema', shopItemSchema)
