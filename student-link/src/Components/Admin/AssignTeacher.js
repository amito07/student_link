import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Message from '../Notify/Message'
import {useDispatch,useSelector} from 'react-redux'
import {assignTeacherCourse ,clearCourse} from '../Actions/courseActions'
import Loader from '../Notify/Loader'

function AssignTeacher() {
        const dispatch = useDispatch()
        const [courseCode, setCourseCode] = useState('')
        const [email, setEmail] = useState('')
        const teacherAdd = useSelector(state => state.teacherAdd)
        const {loading,error,success} = teacherAdd
        const handleAddTeacher = (e)=>{
            e.preventDefault();
            dispatch(assignTeacherCourse(courseCode,email))
            setCourseCode('')
            setEmail('')
        }
        const courseAddClear = ()=>{
            dispatch(clearCourse())
        }

        return (
            <>
            <div className='grid grid-col-3'>
                <div className='col-span-1 mx-10 mt-5'>
                    <Link to='/admindashboard'>
                        <button onClick={courseAddClear} class="text-white transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-10 py-2 rounded-full">
                            Back
                        </button>
                    </Link>
                </div>
                <div className='border shadow rounded w-2/4 mx-auto col-span-2 p-5'>
                    {loading && <Loader/>}
                    {success && <Message variant='true' >Teacher Added</Message>}
                    {error && <Message variant='false'>Error</Message>}
                    <h1 className='text-3xl text-center py-5 font-bold'>Assign Teacher</h1>
                    <form class="w-full max-w-sm">
                        {/* course name */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Course Code
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Course Code"
                            value={courseCode} onChange={(e)=>setCourseCode(e.target.value)}/>
                            </div>
                        </div>
                        {/* course code */}
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Teacher Email
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="text" placeholder="Teacher Email"
                            value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                            <button onClick={handleAddTeacher} class="shadow bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" type="button">
                                Add
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                        {/* footer part */}
                    <div className='flex justify-around p-16 bg-gradient-to-t from-blue-700 to-blue-400 mt-10'>
                        <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <h6 className='font-bold ml-3 font-mono'>Student Link</h6>
    
                        </div>
                        <div className='flex justify-between'>
                            <div className='mr-10'>
                                <ul className='font-mono font-semibold'>
                                    <li>About Student link</li>
                                    <li>Read our blog</li>
                                    <li>SignUp to get Resouces</li>
                                </ul>
    
                            </div>
                            <div>
                                <ul className='font-mono font-semibold'>
                                    <li>Get help</li>
                                    <li>Read FAQs</li>
                                    <li>Get our new courses</li>
                                </ul>
    
                            </div>
    
                        </div>
                    </div>
            </>
        )
}

export default AssignTeacher
