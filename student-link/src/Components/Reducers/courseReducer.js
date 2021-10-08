import {COURSE_REG_REQUEST,COURSE_REG_SUCCESS,COURSE_REG_FAIL,COURSE_REG_CLEAR,
    COURSE_SHOW_REQUEST,COURSE_SHOW_SUCCESS,COURSE_SHOW_FAIL} from '../Constaints/courseConstaints'

//user register reducer
export const courseAddReducer = (state = {},action)=>{
    switch( action.type ){
        case COURSE_REG_REQUEST:
            return {loading: true }
        case COURSE_REG_SUCCESS:
            return {loading: false,success:true}
        case COURSE_REG_FAIL:
            return {loading: false, error: action.payload}
        case COURSE_REG_CLEAR:
            return {}
        default:
            return state        
    }
}

export const allCoursesReducer = (state = {courses:[]},action)=>{
    switch( action.type ){
        case COURSE_SHOW_REQUEST:
            return {loading: true }
        case COURSE_SHOW_SUCCESS:
            return {loading: false , courses: action.payload}
        case COURSE_SHOW_FAIL:
            return {loading: false, error: action.payload}  
        default:
            return state        
    }
}