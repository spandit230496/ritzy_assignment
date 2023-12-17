import './App.css';
import NavBar from './Component/nav/Nav';
// import SignUp from './Pages/signup/SignUp';
// import Login from './Pages/login/Login';
import {Route,Routes} from 'react-router-dom' 
// import ProfilePage from './Pages/profile/ProfilePage';
// import LandingPage from './Pages/Landing-Page/LandingPage';
import NotFound from './Pages/404NotFound/NotFound';
// import MatchMaking from './Pages/MatchMaking/MatchMaking';
// import Preference from './Pages/signup/Preference';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrivateRoutes from './Routes/PrivateRoutes';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Employees from './Pages/EmployeeList/Employees';
import Department from './Pages/DepartmentList/Department';
import EmployeeDetails from './Pages/EmployeeDetails';
import Login from './Pages/Login/Login';
import RegisterEmployee from './Pages/Signup/SignUp';
import { Link } from 'react-router-dom';

function App({logout}) {
 
  const [vis,setVis]=useState(logout)
  const handleLogOut = ()=>{
    Cookies.remove('user');
    navigate('/')
    
    }

     
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
       {/* <Route path='/housing' element ={<HousingListing/>}/>
       <Route path = '/signupwithgoogle' element ={<SignUpViaGoogle/>}/>
       
       <Route path ='/save' element ={<Preference/>}/>
      //  
      
       <Route path="/" element={<ProtectedRoutes/>}>
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path = '/details/:id' element={<Details/>}/>
        <Route path = '/flatmatedetails/:id' element={<FlatMateDetails/>}/>
        
        </Route>
      */}
     </Routes> 
    </div>
  ); 
}

export default App;
