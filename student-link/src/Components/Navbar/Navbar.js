import React,{useEffect} from 'react'
import Logo from '../../images/student_link.jpg'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../Actions/userActions'

function Navbar() {

    const dispatch = useDispatch()
    const history = useHistory()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
    }, [userInfo,history])
    const handleLogOut = (e)=>{
        e.preventDefault()
        dispatch(logout())

    }
    return (
        <nav className='bg-gray-100'>
            <div className='max-w-7xl border-none mx-auto'>
                <div className='flex justify-between'>
                    <Link to='/'>
                        <div className='mt-5 mb-5'>
                            <img className='w-28 cursor-pointer' src={Logo} alt='student-link'/>
                        </div>
                    </Link>
                    <div className='hidden md:flex items-center space-x-3 mr-10'>
                        <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500' to='/'>Home</Link>
                        {userInfo && !userInfo.isAdmin && <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500' to='/profile'>Profile</Link>}
                        {userInfo && !userInfo.isAdmin && <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500' to='/course'>Course</Link>}
                        {userInfo && userInfo.isAdmin && <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500' to='/admindashboard'>Admin Dashboard</Link>}
                        {userInfo ? <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500' onClick={handleLogOut}>Log out</Link> :
                        <Link className='btn shadow bg-gray-300 p-2 hover:bg-blue-600 hover:text-white hover:transition duration-500' to='/login'>Login</Link> }
                    
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button>
                            <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Later work */}
            {/* <div>
                <a href='#' className='block text-center border-b-2 font-bold hover:bg-gray-200'>Home</a>
                <a href='#' className='block text-center border-b-2 font-bold hover:bg-gray-200'>Profile</a>
                <a href='#' className='block text-center font-bold hover:bg-gray-200'>Login</a>
            </div> */}
            
        </nav>
    )
}

export default Navbar
