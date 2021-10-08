import React,{useState,useEffect} from 'react'
import SignupImage from '../../images/signup.png'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../Actions/userActions'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'

function SignUp() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [institute, setInstitute] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const userRegister = useSelector(state => state.userRegister)
    const {loading , error , userInfo} = userRegister
    useEffect(() => {
        if(userInfo){
            history.push('/login')
        }
    }, [history , userInfo])

    const submitHandle = (e)=>{
        e.preventDefault();
        if(password !== cpassword){
            window.alert('Invalid Email or Password')
        }

        dispatch(register(name,email,password,institute))
    }

    return (
        <>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <div className='grid grid-cols-3'>
                <div className='col-span-2 mt-10 ml-10'>
                    <img className='invisible md:visible w-3/4 ml-10 mt-5' src={SignupImage} alt='home'/>
                </div>
                <div className='col-span-3 md:col-span-1 mt-16 mr-10'>
                    <form onSubmit={submitHandle} className='border flex flex-col px-10 py-20 rounded-md shadow-md'>
                        <h1 className='font-mono text-center text-2xl mb-5'><span className='text-blue-700'>Student</span>Link</h1>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='text' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='text' placeholder='Institution' value={institute} onChange={(e)=> setInstitute(e.target.value)}/>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <input className='p-5 bg-gray-100 mt-2 mb-2 focus:outline-none' type='password' placeholder='Confirm Password' value={cpassword} onChange={(e)=> setCpassword(e.target.value)}/>
                        <button type='submit' className='mt-5 rounded-full py-3 px-3 shadow transition duration-500 ease-in-out bg-white hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 w-2/4 mx-auto'>Sign Up</button>
                    </form>
                    <h1 className='font-bold'>Already User ? <Link className='text-blue-700' to='/login'>Log In</Link></h1>
                </div>
            </div>
        </>
    )
}

export default SignUp
