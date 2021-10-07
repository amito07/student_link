const mongoose = require('mongoose')
const bycrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require: true
    },
    institute:{
        type:String,
        require: false
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'Course'
        }
    ],
    isAdmin:{
        type:Boolean,
        require: true,
        default: false
    },
    isTeacher:{
        type:Boolean,
        require: true,
        default: false
    },


})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bycrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save',async function(next){
    //check password change if not change then it will change it
    if(!this.isModified('password')){
        next()
    }
    //salt is a mongoose function that use to take random string in the bycrypt password for more secure
    //if password change then it will work
    const salt = await bycrypt.genSalt(10)
    this.password = await bycrypt.hash(this.password,salt)
})

const User = mongoose.model('User',userSchema)
module.exports = User