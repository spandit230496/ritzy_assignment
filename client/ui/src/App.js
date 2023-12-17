import './App.css';
import NavBar from './Component/nav/Nav';
import {Route,Routes} from 'react-router-dom' 
import NotFound from './Pages/404NotFound/NotFound';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from './Pages/EmployeeList/Employees';
import Department from './Pages/DepartmentList/Department';
import EmployeeDetails from './Pages/EmployeeDetails';
import Login from './Pages/Login/Login';
import RegisterEmployee from './Pages/Signup/SignUp';
import { Link } from 'react-router-dom';
import NumberOfEmployee from './Pages/NumberOfEmployee/NumberOfEmployee';

function App({logout}) {
 
  const [vis,setVis]=useState(logout)
 

     
  const handleLogOutCancel = ()=>{
     setVis(!vis)
    
    }

 const navigate = useNavigate()
  return (
    <div className="App">
     <NavBar/>
     <Routes>
       
       <Route path = '/' element={<Employees/>} />
      <Route path = '/employees' element={<Employees/>} />
      <Route path='/*' element={<NotFound/>} />
      <Route path = '/department' element={<Department/>}></Route>
      <Route path='/employee' element={<EmployeeDetails/>}/>
       <Route path='/login' element={<Login/>} />
       <Route path='/signup' element={<RegisterEmployee/>} />
      <Route path='/get-employee/:department' element={<NumberOfEmployee/>} />

       
     </Routes> 
    </div>
  ); 
}

export default App;
