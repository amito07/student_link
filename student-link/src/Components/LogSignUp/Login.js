import React,{useState,useEffect} from 'react'
import LoginImage from '../../images/login.jpg'
import {Link,useHistory} from 'react-router-dom'
import {login} from '../Actions/userActions'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'
import {useDispatch,useSelector} from 'react-redux'

function Login() {
    const history = useHistory();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
    }, [history , userInfo])

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login(email,password))
    }

    return (
        <>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <div className='grid grid-cols-3'>
                <div className='col-span-2 mt-10 ml-10'>
                    <img className='invisible md:visible w-min' src={LoginImage} alt='login'/>
                </div>
                <div className='col-span-3 md:col-span-1 mt-16 mr-10'>
                    <form onSubmit={handleSubmit} className='border flex flex-col px-10 py-20 rounded-md shadow-md'>
                        <h1 className='font-mono text-center text-2xl mb-5'><span className='text-blue-700'>Student</span>Link</h1>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type='submit' className='mt-5 rounded-full py-3 px-5 shadow transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 w-2/4 mx-auto'>Log In</button>
                    </form>
                    <h1 className='font-bold'>New User ?<Link className='text-blue-700' to='/signup'>Create Account</Link></h1>
                </div>
            </div>
        </>
    )
}

export default Login
