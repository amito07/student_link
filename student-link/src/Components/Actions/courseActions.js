import {COURSE_REG_REQUEST,COURSE_REG_SUCCESS,COURSE_REG_FAIL,COURSE_REG_CLEAR} from '../Constaints/courseConstaints'
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
