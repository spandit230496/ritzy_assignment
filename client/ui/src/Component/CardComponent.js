import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ArrowCircleRight, DeleteForever, EditOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
// import setShowDetails from '../app/ShowDetails';
import { setShowDetails } from '../app/ShowDetails'; // Correct import path
import axios from 'axios';
import { CircularProgress } from '@mui/material';


export default function BioCard({ data ,handleDelete}) {
  const isLoggedIn = Cookies.get('user');
  const manager = localStorage.getItem("manager")
  const [loading,setisloading]= useState(false)

  const cardDetails = {
    data: data,
    showModal: true
  };
  
  
  const navigate = useNavigate();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const dispatch = useDispatch()

  const handleSeeMoreDetails = () => {
    navigate('/employee');
    dispatch(setShowDetails(cardDetails));
}



  return (
    <>
    
    {loading?<CircularProgress/>:<Card
      sx={{
        width: '100%',
        maxWidth: 400,
        boxShadow: 'lg',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >  
      <ToastContainer />
      {manager&&<Box sx={{ float: "left", width: "100%" }}>
        <EditOutlined />
        <DeleteForever sx={{ color: "red" }} onClick={()=>handleDelete(data.employee_id)} />
      </Box>}
      <CardContent sx={{ textAlign: 'center', display: "grid", gridTemplateRows: "1fr 1fr 1fr", alignItems: "center", justifyContent: "center" }}>

        <Avatar src="/static/images/avatar/1.jpg" sx={{ width: '80px', height: '80px', margin: 'auto' }} />

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: '8px' }}>
          {data.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: '8px' }}>
          {`Employee id : ${data.employee_id}`}
        </Typography>
        <Typography variant="body1" sx={{ mb: '8px' }}>
          {`Employee id : ${data.address}`}
        </Typography>
        

       { manager?<Typography variant="body2" sx={{ textAlign: 'justify', mb: '16px', display: "flex" }}>
          See More Details <ArrowCircleRight sx={{ color: "blue" }} onClick={handleSeeMoreDetails} />
        </Typography>:""}

      </CardContent>

    </Card>}
    </>
  );
}
