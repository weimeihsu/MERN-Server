import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cdnSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})

// module.exports = mongoose.model('cdnSchema', cdnSchema)
export default mongoose.model('cdnSchema', cdnSchema)