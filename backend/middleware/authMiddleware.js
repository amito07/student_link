const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandaler = require('express-async-handler')
const dotenv = require("dotenv")
dotenv.config();

const protect = asyncHandaler(async(req,res,next)=>{
    let token
    //req.headers.auth contain auth info like token stuff and so and 
    //this value start with Bearer so we have to check
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get specific token value
            token = req.headers.authorization.split(' ')[1]
            
            //decode the token value and get user _id
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            
            //req.user contain user info without password 
            //thats why we use .select(-password)
            req.user = await User.findById(decode.id).select('-password')
            next()
            
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not Authorized, Token Failed !')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not Authorized, No Token!')
    }
})

module.exports = protect;