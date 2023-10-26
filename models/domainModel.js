const mongoose = require('mongoose')

const Schema = mongoose.Schema

const domainSchema = new Schema({
    sitename: {
        type:String,
        required: true
    },
    domainname: {
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('domainSchema', domainSchema)
