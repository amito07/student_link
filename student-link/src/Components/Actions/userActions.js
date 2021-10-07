import {USER_REG_REQUEST,USER_REG_SUCCESS,USER_REG_FAIL} from '../Constaints/userConstaints'
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
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_REG_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}