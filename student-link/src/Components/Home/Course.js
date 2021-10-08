import React,{useEffect} from 'react'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'
import { allcourses } from '../Actions/courseActions'
import {useDispatch,useSelector} from 'react-redux'


function Course() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allcourses())
    }, [])
    const allCourses = useSelector(state => state.allCourses)
    const {loading, error, courses} = allCourses

    const submitEnroll = (code) =>{
        console.log(code);
    }

    return (
        <div>
            <h1 className='font-bold text-center text-3xl mt-5'>Enroll Your Course</h1>
            {loading && <Loader/>}
            {error && <Message variant='false'>Error 404 not Found</Message>}
            {/* border bottom */}
            <div className='border-b-2 w-2/4 mx-auto mt-16'></div>
            <div className='grid lg:grid-cols-3 gap-10 mt-10 mx-10'>
                    {/* Course Card */}
                    {courses && courses.map((course)=>(
                        <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                                <div className='p-12'>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span> {course.name}</h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span> {course.courseTime} </h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Teacher:</span> {course.courseTeacher ? course.courseTeacher : 'Not Assign'} </h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Details:</span> {course.courseDetails} </h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Code:</span> {course.courseCode} </h1>
                                </div>
                                <div className='flex justify-end mr-5 mb-5'>
                                <button onClick={()=>submitEnroll(course.courseCode)} class="text-white transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-10 py-2 rounded">
                                    Enroll
                                </button>
                                </div>
                        </div>

                    ))}
                </div>
        </div>
    )
}

export default Course
