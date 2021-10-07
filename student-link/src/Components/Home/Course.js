import React from 'react'

function Course() {
    return (
        <div>
            <h1 className='font-bold text-center text-3xl mt-5'>Enroll Your Course</h1>

            {/* border bottom */}
            <div className='border-b-2 w-2/4 mx-auto mt-16'></div>
            <div className='grid lg:grid-cols-3 gap-10 mt-10 mx-10'>
                    {/* Course Card */}
                    <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                        <div className='p-12'>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span> NodeJs Tutorial</h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span> Tue 12.00pm </h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Teacher:</span> Amit Mandal </h1>
                        </div>
                        <div className='flex justify-end mr-5 mb-5'>
                        <button class="text-white transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-10 py-2 rounded">
                            Enroll
                        </button>
                        </div>
                    </div>

                    <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                        <div className='p-12'>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span> NodeJs Tutorial</h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span> Tue 12.00pm </h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Teacher:</span> Amit Mandal </h1>
                        </div>
                        <div className='flex justify-end mr-5 mb-5'>
                        <button class="text-white transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-10 py-2 rounded">
                            Enroll
                        </button>
                        </div>
                    </div>

                    <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                        <div className='p-12'>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span> NodeJs Tutorial</h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span> Tue 12.00pm </h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Teacher:</span> Amit Mandal </h1>
                        </div>
                        <div className='flex justify-end mr-5 mb-5'>
                        <button class="text-white transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-10 py-2 rounded">
                            Enroll
                        </button>
                        </div>
                    </div>

                    <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                        <div className='p-12'>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span> NodeJs Tutorial</h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span> Tue 12.00pm </h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Teacher:</span> Amit Mandal </h1>
                        </div>
                        <div className='flex justify-end mr-5 mb-5'>
                        <button class="text-white transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-10 py-2 rounded">
                            Enroll
                        </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Course
