import React from 'react'
import LoginImage from '../../images/login.jpg'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-2 mt-10 ml-10'>
                <img className='invisible md:visible w-min' src={LoginImage}/>
            </div>
            <div className='col-span-3 md:col-span-1 mt-16 mr-10'>
                <form className='border flex flex-col px-10 py-20 rounded-md shadow-md'>
                    <h1 className='font-mono text-center text-2xl mb-5'><span className='text-blue-700'>Student</span>Link</h1>
                    <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='email' placeholder='Email'/>
                    <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='password' placeholder='Password'/>
                    <button className='mt-5 rounded-full py-3 px-5 shadow transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 w-2/4 mx-auto'>Log In</button>
                </form>
                <h1 className='font-bold'>New User ?<Link className='text-blue-700' to='/signup'>Create Account</Link></h1>
            </div>
        </div>
    )
}

export default Login
