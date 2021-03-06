import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer , userLoginReducer,courseAddInStudentReducer, courselistReducer} from '../Components/Reducers/userReducer';
import { courseAddReducer,allCoursesReducer, teacherAddReducer } from '../Components/Reducers/courseReducer';
const userinfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


//initial the state
const initialState = {
    userLogin: {userInfo : userinfoFromStorage}
}

const reducer = combineReducers({
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer,
    courseAdd:courseAddReducer,
    allCourses:allCoursesReducer,
    courseAddInStudent:courseAddInStudentReducer,
    courselists:courselistReducer,
    teacherAdd:teacherAddReducer
})

//it is work as a middleware (thunk)
const middleware = [thunk]


//create the container named store
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
