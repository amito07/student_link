import React from 'react'
import {Link} from 'react-router-dom'

function AdminDashBoard() {
    return (
        <>
            <div>
                <h1 className='text-5xl font-bold text-center mt-5'>Admin DashBoard</h1>
                {/* border bottom */}
                <div className='border-b-2 w-2/4 mx-auto mt-10'></div>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 mt-10 mx-10'>
                {/* for course */}
                <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-blue-500'>
                    <div className='flex justify-between mx-5 mt-5'>
                        <h1 className='text-2xl text-white font-bold'>Course</h1>
                        <svg  xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    <div className='flex justify-between mt-16 mx-5 mb-5'>
                        <h1 className='text-xl text-white font-bold'>Total Course</h1>
                        <h2 className='text-lg text-white font-bold'>15</h2>
                    </div>

                </div>
                {/* for teacher */}
                <div className='border rounded-lg shadow-lg bg-gradient-to-r from-yellow-600 to-yellow-300'>
                    <div className='flex justify-between mx-5 mt-5'>
                        <h1 className='text-2xl text-white font-bold'>Teacher</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div className='flex justify-between mt-16 mx-5 mb-5'>
                        <h1 className='text-xl text-white font-bold'>Total Teacher</h1>
                        <h2 className='text-lg text-white font-bold'>5</h2>
                    </div>

                </div>
                {/* for student */}
                <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-300'>
                    <div className='flex justify-between mx-5 mt-5'>
                        <h1 className='text-2xl text-white font-bold'>Student</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div className='flex justify-between mt-16 mx-5 mb-5'>
                        <h1 className='text-xl text-white font-bold'>Total Student</h1>
                        <h2 className='text-lg text-white font-bold'>150</h2>
                    </div>

                </div>
                {/* Add Course */}
                <div className='border rounded-lg shadow-lg bg-gradient-to-r from-red-600 to-red-400'>
                    <div className='flex justify-around mx-20 mt-20 mb-20 content-center'>
                        <h1 className='text-2xl text-white font-bold'>Add Course</h1>
                        <Link to='/addcourse'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* Assign Teacher */}
                <div className='border rounded-lg shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                    <div className='flex justify-around mx-20 mt-20 mb-20 content-center'>
                        <h1 className='text-2xl text-white font-bold'>Assign Teacher</h1>
                        <Link to='/assignteacher'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
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

export default AdminDashBoard
