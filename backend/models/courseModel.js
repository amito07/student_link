const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    courseCode:{
        type:String,
        require:true
    },
    courseTeacher:[{
            type:mongoose.Types.ObjectId,
            ref:'User'
    }],
    courseStudent:[
        {
            type:mongoose.Types.ObjectId,
            ref:'User'
        }
    ],
    courseDetails:{
        type:String,
        require:true
    },
    courseTime:{
        type:String,
        require:true
    }
})

const Course = mongoose.model('Course',courseSchema)
module.exports = Course