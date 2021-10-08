import {USER_REG_REQUEST,USER_REG_SUCCESS,USER_REG_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,
USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL,COURSE_STUDENT_REQUEST,COURSE_STUDENT_SUCCESS,COURSE_STUDENT_FAIL} from '../Constaints/userConstaints'
import axios from 'axios'

//Registration Action
export const register = (name,email,password,institute)=>async(dispatch)=>{
    try {
        dispatch({
            type: USER_REG_REQUEST,
        })


        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.post('/api/users/register',{name,email,password,institute} ,config)

        dispatch({
            type: USER_REG_SUCCESS,
            payload: data
        })
        //convert data in string formate...web receive string formate only
        // localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_REG_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//Log in Action   
export const login = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })


        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.post('/api/users/login',{email , password} ,config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        //convert data in string formate...web receive string formate only
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//Log out Action
export const logout = ()=> (dispatch)=>{
    localStorage.removeItem('userInfo')
    // localStorage.removeItem('user')
    dispatch({type: USER_LOGOUT})
}

//Get User Info Action
export const getuserDetails = (id)=>async(dispatch,getState)=>{
    console.log("Get User Action")
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

        const {userLogin:{userInfo}} = getState()


        //set the header for the get method
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}` 
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.get(`/api/users/${id}`,config)
        console.log(data);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

export const addCourseToStudent = (id)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type: COURSE_STUDENT_REQUEST,
        })

        //get the user info
        const {userLogin:{userInfo}} = getState()
        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        //getting user data including tokens and so..........
        await axios.post(`/api/users/enrollcourse/${id}`,config)

        dispatch({
            type: COURSE_STUDENT_SUCCESS,
        })
        //convert data in string formate...web receive string formate only
        // localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: COURSE_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}