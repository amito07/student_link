const asyncHandaler = require('express-async-handler')
const Course = require('../models/courseModel')

//Register a new course
const registerCourse = asyncHandaler(async(req,res) => {
    const {name ,courseCode,courseDetails,courseTime} = req.body

    const courseExist = await Course.findOne({courseCode})

    if(courseExist){
        res.status(400)
        throw new Error('Course Already Exists')
    }

    const course = await Course.create({name ,courseCode,courseDetails,courseTime})
    if(course){
        res.status(201).json({
            _id: course._id,
            name:course.name,
            courseCode: course.courseCode,
            courseDetails: course.courseDetails,
            courseTime: course.courseTime,
            courseTeacher: course.courseTeacher,
            courseStudent:course.courseStudent,
        })
    }else{
        res.status(404)
        throw new Error('Course Not Found')
    }
    
})

module.exports = {registerCourse}