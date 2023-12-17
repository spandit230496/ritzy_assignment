import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogActions, DialogContent, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link ,useNavigate} from 'react-router-dom';

const Login = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    employee_id: '',
    password: '',
  });

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/employee/login', loginData);
      localStorage.setItem("manager",response.data.employee.position=="managerial")
      console.log("===========",response)
      navigate('/employees')
      
    } catch (error) {
      toast.error('An error occurred while logging in.', { autoClose: 3000 });
    }
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <TextField
          name="employee_id"
          label="Employee ID"
          value={loginData.employee_id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
        <Link to="/signup">Dont have an account?</Link>
        <ToastContainer />

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Access Level</DialogTitle>
          <DialogContent>
            Do you want to access as a normal employee or admin?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            {/* Add actions for normal employee and admin */}
            <Button onClick={handleCloseModal}>Normal Employee</Button>
            <Button onClick={handleCloseModal}>Admin</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Login;
