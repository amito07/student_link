const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    courseCode:{
        type:Number,
        require:true
    },
    courseTeacher:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    courseStudent:[
        {
            type:mongoose.Types.ObjectId,
            ref:'User'
        }
    ]
})

const Course = mongoose.model('Course',courseSchema)
module.exports = Course