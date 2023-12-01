import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import userSchema from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next)=>{
    let token
    token = req.cookies.jwt

    if(token){
        try{ 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await userSchema.findById(decoded.userID).select('-password')
            // the -password will remove the decoded password. 
            next()
        } catch(err){
            res.status(401).json({error: err.message})
        }
    }else{
        res.status(401).json('Not authorized, no token')
    }
})

export { protect }