const asyncHandaler = require('express-async-handler')
const Course = require('../models/courseModel')
const User = require('../models/userModel')

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

//get all course
const getAllCourse = asyncHandaler(async(req,res) => {
    const course = await Course.find({})
    res.json(course)

})

//Update user profile
//@route GET /api/users/profile
//@access public
const enrollCourse = asyncHandaler(async(req,res) => {
    const course = await Course.find({courseCode: req.params.id})
    const user = await User.findById(req.user._id)
    try {
        await User.updateOne({
            _id:req.user._id
        },{
            $push:{
                courses: course[0]._id
            }
        })
        await Course.updateOne({
            _id:course[0]._id
        },{
            $push:{
                courseStudent:req.user._id
            }
        })
        
    } catch (error) {
        console.log(error);
    }
})

//Assign New Teacher
const assignTeacher = asyncHandaler(async(req,res) => {
    const {courseCode,email} = req.body

    try {

       const user1 =  await User.updateOne({email:email}, {
            isTeacher: true
        });
       const course = await Course.find({courseCode: courseCode})
       const user = await User.find({email:email})
       console.log(course[0])
       console.log(user[0])
       await User.updateOne({
                _id:user[0]._id
            },{
                $push:{
                    courses: course[0]._id
                }
            })

            await Course.updateOne({
                _id:course[0]._id
            },{
                $push:{
                    courseTeacher:user[0]._id
                }
            })
        res.json(user)

        
    } catch (error) {
        console.log(error)
    } 
    
})


module.exports = {registerCourse,getAllCourse,enrollCourse,assignTeacher}