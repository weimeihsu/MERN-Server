import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }
}, {timestamps: true})

// module.exports = mongoose.model('domainSchema', domainSchema)
export default mongoose.model('userSchema', userSchema)

