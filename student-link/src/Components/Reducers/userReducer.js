import {USER_REG_REQUEST,USER_REG_SUCCESS,USER_REG_FAIL} from '../Constaints/userConstaints'
import axios from 'axios'

//user register reducer
export const userRegisterReducer = (state = {},action)=>{
    switch( action.type ){
        case USER_REG_REQUEST:
            return {loading: true }
        case USER_REG_SUCCESS:
            return {loading: false , userInfo: action.payload}
        case USER_REG_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state        
    }
}

