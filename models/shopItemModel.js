const mongoose = require('mongoose')

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
    }
}, {timestamps: true})

module.exports = mongoose.model('shopItemSchema', shopItemSchema)
