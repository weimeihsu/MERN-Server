import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
},{timestamps: true})

// module.exports = mongoose.model('cdnSchema', cdnSchema)
export default mongoose.model('genreSchema', genreSchema)