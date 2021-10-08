import {COURSE_REG_REQUEST,COURSE_REG_SUCCESS,COURSE_REG_FAIL,COURSE_REG_CLEAR,
    COURSE_SHOW_REQUEST,COURSE_SHOW_SUCCESS,COURSE_SHOW_FAIL} from '../Constaints/courseConstaints'
import axios from 'axios'

//Registration Action
export const addcourse = (name,courseCode,courseDetails,courseTime)=>async(dispatch)=>{
    try {
        dispatch({
            type: COURSE_REG_REQUEST,
        })


        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        
        await axios.post('/api/course/addcourse',{name,courseCode,courseDetails,courseTime} ,config)

        dispatch({
            type: COURSE_REG_SUCCESS
        })
        
    } catch (error) {
        dispatch({
            type: COURSE_REG_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//Log out Action
export const clearCourse = ()=> (dispatch)=>{
    dispatch({type: COURSE_REG_CLEAR})
}

export const allcourses = ()=>async(dispatch,getState)=>{
    // console.log("ListMyOrders Action");
    try {
        dispatch({
            type: COURSE_SHOW_REQUEST,
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
        const {data} = await axios.get(`/api/course/getallcourse`,config)
        console.log("Courses",data)

        dispatch({
            type: COURSE_SHOW_SUCCESS,
            payload: data,
        })
        //convert data in string formate...web receive string formate only
        // localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: COURSE_SHOW_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}
