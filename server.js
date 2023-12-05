import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import siteRoutes from './routes/siteRoutes.js'
import domainRoutes from './routes/domainRoutes.js'
import recordRoutes from './routes/recordRoutes.js'
import shopItemRoutes from './routes/shopItemRoutes.js'
import stripeRoutes from './routes/stripeRoutes.js'
import userRoutes from './routes/userRoutes.js'
import openaiRoutes from './routes/openaiRoutes.js'
// require('dotenv').config()
// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const siteRoutes = require('./routes/siteRoutes')
// const domainRoutes = require('./routes/domainRoutes')
// const recordRoutes = require('./routes/recordRoutes')
// const shopItemRoutes = require('./routes/shopItemRoute')
// const stripeRoutes = require('./routes/stripeRoutes')

const PORT = process.env.PORT
const app = express()

// express.json() this will look into the requst body and parsin json format It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())
app.use(cookieParser())
// urlencoded parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
app.use(cors({
    origin:['http://localhost:5173/','https://1st-react.web.app/','https://mern-project-weimei.onrender.com']
}))
// routes
app.use('/api/records', recordRoutes)
app.use('/api/sites', siteRoutes)
app.use('/api/domains', domainRoutes)
app.use('/api/shopItems', shopItemRoutes)
app.use('/api/checkout', stripeRoutes)
app.use('/api/users', userRoutes)
app.use('/api/openai', openaiRoutes)
// connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(PORT,()=>{ console.log('Connect to DB and listen to port '+ PORT )})
    })
    .catch((error)=>{
        console.log(error)
    })




