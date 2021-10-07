import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'
import { getuserDetails } from '../Actions/userActions'


function Profile() {


    const history = useHistory();
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const {loading,error,userInfo} = userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else{
            if(!userInfo.name){
                dispatch(getuserDetails('profile'))
            }
        }
    }, [dispatch,history,userInfo]) 

    return (
        <>
            {loading && <Loader/>}
            <div>
                <h1 className='text-4xl font-bold mx-16 mt-10'>Profile</h1>

                {/* border bottom */}
                <div className='border-b-2 w-2/4 mx-16 mt-5'></div>
                {/* Name part */}
                <div className='flex mx-16 mt-3'>
                    <div>
                    <label className='mr-5 font-bold text-xl'>
                        Name:
                    </label>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{userInfo && userInfo.name}</h1>
                    </div>
                </div>
                {/* Email part */}
                <div className='flex mx-16 mt-3'>
                    <div>
                    <label className='mr-5 font-bold text-xl'>
                        Email:
                    </label>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{userInfo && userInfo.email}</h1>
                    </div>
                </div>
                {/* Institute part */}
                <div className='flex mx-16 mt-3'>
                    <div>
                    <label className='mr-5 font-bold text-xl'>
                        Institution Name:
                    </label>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{userInfo && userInfo.institute}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-32'>
                <h1 className='text-4xl font-bold mx-16 mt-10'>Your Course</h1>
                {/* border bottom */}
                <div className='border-b-2 w-2/4 mx-16 mt-5'></div>

                <div className='grid lg:grid-cols-3 gap-10 mt-10 mx-10'>
                    {/* Course Card */}
                    <div className='border rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-green-400 mx-5'>
                        <div className='p-12'>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Name:</span> NodeJs Tutorial</h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Class Time:</span> Tue 12.00pm </h1>
                            <h1 className='font-bold text-xl text-white'><span className='text-black'>Course Teacher:</span> Amit Mandal </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
