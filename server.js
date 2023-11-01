require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const siteRoutes = require('./routes/siteRoutes')
const domainRoutes = require('./routes/domainRoutes')
const recordRoutes = require('./routes/recordRoutes')
const cors = require("cors")
const app = express()
const PORT = process.env.PORT

// middleware. this will look into the requst body and parsin json format
app.use(express.json())
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

// connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(PORT,()=>{ console.log('Connect to DB and listen to port '+ PORT )})
    })
    .catch((error)=>{
        console.log(error)
    })




