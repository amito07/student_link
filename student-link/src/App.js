import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import AddCourse from './Components/Admin/AddCourse';
import AdminDashBoard from './Components/Admin/AdminDashBoard';
import AssignTeacher from './Components/Admin/AssignTeacher';
import Course from './Components/Home/Course';
import Home from './Components/Home/Home';
import Profile from './Components/Home/Profile';
import Login from './Components/LogSignUp/Login';
import SignUp from './Components/LogSignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/admindashboard' component={AdminDashBoard}/>
        <Route path='/assignteacher' component={AssignTeacher}/>
        <Route path='/addcourse' component={AddCourse}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/course' component={Course}/>
      </Router>
    </div>
  );
}

export default App;
