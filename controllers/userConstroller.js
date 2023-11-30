import asyncHandler from 'express-async-handler'
import userSchema from '../models/userModel.js'
// route POST /api/users/auth
const authUser = asyncHandler(async (req, res) =>{
    res.status(200).json({message:'Auth user'})
})

// route POST /api/users = create a user
const registerUser = asyncHandler(async (req, res) =>{
    const { email, password } = req.body
    const userExist = await userSchema.findOne({email})
    if(userExist){
        res.status(400).json({error:'The User Exists'})
    }
    try{
        const user = await userSchema.create({email, password})
        res.status(200).json(user)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

// route POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) =>{
    res.status(200).json({message:'Logout user'})
})

// route GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) =>{
    res.status(200).json({message:'User Profile'})
})

// route PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) =>{
    res.status(200).json({message:'Update User Profile'})
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }