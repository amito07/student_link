import React,{useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import Loader from '../Notify/Loader'
import { getuserDetails } from '../Actions/userActions'


function Profile() {


    const history = useHistory();
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const {loading,userInfo} = userLogin

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
                <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500 ml-12' to='/allcourses' >Click To See Your Courses</Link>
            </div>
        </>
    )
}

export default Profile
