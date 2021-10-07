import React from 'react'
import HomeImage from '../../images/home.jpg'
import Resource from '../../images/resource.jpg'
import Communication from '../../images/communicate.png'
import Responder from '../../images/responder.jpg'

function Home() {
    return (
        <>
            {/* banner part */}
            <div className='grid grid-cols-3 mt-5'>
                <div className='col-span-1'>
                    <img className='w-min' src={HomeImage}/>
                </div>
                <div className='col-span-2 mt-10'>
                    <h1 className='text-2xl md:text-8xl font-mono text-center'><span className='text-blue-700'>Student</span>Link</h1>
                    <p className='text-center text-lg font-mono font-bold'>Is a platform where students can communicate with teachers and <br/> gather strong knowledge in different fields </p>
                </div>
            </div>


            {/* border bottom */}
            <div className='border-b-2 w-2/4 mx-auto mt-16'></div>


            {/* what we will provide part */}
            <div>
                <div className='mt-10 ml-10'>
                    <h1 className='text-3xl'>What we will provide</h1>
                    <p className='text-md'>As a new Competitor in this field we will provide what we can...</p>

                </div>
                        <div className='mt-10 grid lg:grid-cols-3 gap-10 mx-5'>
                            <div class='card  hover:shadow-lg transform transition duration-500 hover:scale-110'> 
                                
                                <img src={Resource} alt="Resource" class='w-full h-32 sm:h-48 object-cover'/>
                                <div class='m-4'>
                                <span class='font-bold'>Vast Resources</span>
                                <span class='block text-gray-500 text-sm'>Recipe by Amit</span>
                                </div>
                            </div>
                            <div class='card  hover:shadow-lg transform transition duration-500 hover:scale-110'> 
                                <img src={Communication} alt="noodles" class='w-full h-32 sm:h-48 object-cover'/>
                                <div class='m-4'>
                                <span class='font-bold'>Communication network</span>
                                <span class='block text-gray-500 text-sm'>Recipe by Amit</span>
                                </div>
                            </div>
                            <div class='card  hover:shadow-lg transform transition duration-500 hover:scale-110'> 
                                <img src={Responder} alt="noodles" class='w-full h-32 sm:h-48 object-cover'/>
                                <div class='m-4'>
                                <span class='font-bold'>Quick Responder</span>
                                <span class='block text-gray-500 text-sm'>Recipe by Amit</span>
                                </div>
                            </div>
                    </div>
            </div>
            {/* border bottom */}
            <div className='border-b-2 w-2/4 mx-auto mt-16'></div>


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

export default Home
