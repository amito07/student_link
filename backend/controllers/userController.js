const asyncHandaler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

//Register a new user
//@route GET /api/users/profile
//@access public
const registerUser = asyncHandaler(async(req,res) => {
    const {name ,email,password,institute} = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user = await User.create({name ,email,password,institute})
    if(user){
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            isAdmin: user.isAdmin,
            isTeacher:user.isTeacher,
            courses:user.courses,
            token : generateToken(user._id)
        })
    }else{
        res.status(404)
        throw new Error('User Not Found')
    }
    
})

//auth user and get token(Log In)
//@route POST /api/users/login
//@access public
const authUser = asyncHandaler(async(req,res) => {
    const{email, password} = req.body

    //find user using email and password
    const user = await User.findOne({email})
    // console.log(user)

    //if user is valid and password also then it will show
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name:user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            isAdmin: user.isAdmin,
            isTeacher:user.isTeacher,
            courses:user.courses,
            token : generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid password or email')

    }
})

module.exports = {registerUser,authUser}