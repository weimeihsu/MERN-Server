import asyncHandler from 'express-async-handler'
import userSchema from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
// route POST /api/users/auth -> this is login
const authUser = asyncHandler(async (req, res) =>{
    const {email, password} = req.body

    const user = await userSchema.findOne({email})

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
        res.status(200).json(user)
    } else {
        res.status(400).json('Invalid Email or Password')
    }
})

// route POST /api/users = create a user
const registerUser = asyncHandler(async (req, res) =>{
    // console.log(req.body)
    
    const { email, password } = req.body
    const userExist = await userSchema.findOne({email})

    if(userExist){
       return res.status(400).json({error:'The User Exists'})
    }

    try{
        const user = await userSchema.create({email, password})
        generateToken(res, user._id)
        res.status(200).json(user)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

// route POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) =>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json('User Logged Out')
})

// route GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) =>{
    // const req.body will return all data of this user. destructure the user and only get back necessary info
    const user = {
        _id: req.user._id,
        email: req.user.email
    }
    res.status(200).json(user)
})

// route PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) =>{
    const user = await userSchema.findById(req.user._id)

    if(user){
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.status(200).json(updatedUser)
    } else {
        res.status(401).json({message:'User not found'})
    }
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }