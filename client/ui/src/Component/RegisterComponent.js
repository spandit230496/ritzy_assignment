import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import React from 'react'

const RegisterComponent = () => {
  const [data,setdata]= useState({
    "name":"",
    "employee_id": "",
    "password": "",
    "address": "",
    "position": "",
    "department": ""
})
  return (
    <Container maxWidth="md">
    <Grid container style={{ height: '100vh', width: '100%' }}>
      <Grid item xs={12} sm={6} style={backgroundStyle}></Grid>
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', width: '100%', boxShadow: '0rem 0rem 2rem rgb(96, 96, 255)' }}>
          <Typography variant="h4" gutterBottom>
            Register Yourself
          </Typography>
          <div className="signupform">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={data.name}
              style={{ marginBottom: '15px' }}
              onChange={(e) => handleChange(e, "name")}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={data.email}
              style={{ marginBottom: '15px' }}
              onChange={(e) => handleChange(e, "email")}
            />
           
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              name="mobileNumber"
              style={{ marginBottom: '15px' }}
              value={data.mobileNo}
              onChange={(e) => handleChange(e, "mobileNo")}
            />
            <TextField
              variant="outlined"
              fullWidth
              type="date"
              name="DateOfBirth"
              style={{ marginBottom: '15px' }}
              value={data.DateOfBirth}
              onChange={(e) => handleChange(e, "DateOfBirth")}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
              Next
            </Button>
          </div>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
            Already have an account? <NavLink to="/login">Sign in here</NavLink>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  )
}

export default RegisterComponent