import React,{useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import Loader from '../Notify/Loader'
import { getStudentCourses } from '../Actions/userActions'

function AllCourse() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const {loading,userInfo} = userLogin

    const courselists = useSelector(state => state.courselists)
    const {courselist} = courselists

    const {courses} = courselist
    console.log(courses);

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else{
            dispatch(getStudentCourses('profile'))
        }
    }, [dispatch,history,userInfo]) 

    return (
        <>
            {/* {loading && <Loader/>} */}
            <div className='mt-0'>
                <h1 className='text-4xl font-bold mx-16 mt-10'>Your Course</h1>
                {/* border bottom */}
                <div className='border-b-2 w-2/4 mx-16 mt-5'></div>

                <div className='grid lg:grid-cols-3 gap-10 mt-10 mx-10'>
                    {/* Course Card */}
                    {courses && courses.map(course=>(
                            <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                                <div className='p-12'>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span>{course.name}</h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span>{course.courseTime}</h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Code:</span>{course.courseCode}</h1>
                                    <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Details:</span>{course.courseDetails}</h1>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllCourse
