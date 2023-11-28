import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const siteSchema = new Schema({
    sitename: {
        type:String,
        required: true,
    }
}, {timestamps: true})

// module.exports = mongoose.model('siteSchema', siteSchema)
export default mongoose.model('siteSchema', siteSchema)
