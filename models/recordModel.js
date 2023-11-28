import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    category: {
        type: String,
        required:true
    }
}, {timestamps: true})

// module.exports = mongoose.model('recordSchema', recordSchema)
export default mongoose.model('recordSchema', recordSchema)