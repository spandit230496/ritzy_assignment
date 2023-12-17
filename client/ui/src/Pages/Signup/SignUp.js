import React, { useState } from 'react';
import { Button, Grid, TextField, MenuItem, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegisterEmployee = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate()
  const [loading,setisloading]= useState(false)

  const [formData, setFormData] = useState({
    name: '',
    employee_id: '',
    password: '',
    address: '',
    position: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setisloading(true)
      const response = await axios.post('http://xyzcomp.onrender.com/employee/register', formData);
      if (response.status === 200||201) {
        setisloading(false)
        console.log("=================",response)
        toast("registered sucessfully")
        navigate('/employees')
        
      } else {
        toast.error('Failed to register employee. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('An error occurred while registering employee.', { autoClose: 3000 });
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      {loading?<CircularProgress/>:
      <Grid item xs={12} sm={6} md={4}>
        <div>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="employee_id"
            label="Employee ID"
            value={formData.employee_id}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            name="position"
            label="Position"
            value={formData.position}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="managerial">Managerial Post</MenuItem>
            <MenuItem value="non-managerial">Non-Managerial Post</MenuItem>
          </TextField>
          <Button variant="contained" onClick={handleSubmit}>
            Register Employee
          </Button>
          <ToastContainer />
        </div>
      </Grid>}
    </Grid>
  );
};

export default RegisterEmployee;
