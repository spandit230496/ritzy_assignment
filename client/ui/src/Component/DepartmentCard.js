import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useState ,useEffect} from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {ModeEditOutline,DeleteForeverOutlined, ArrowCircleRight}from '@mui/icons-material'
import {useDispatch} from 'react-redux'
import { setEdit } from '../app/EditSlice';


export default function DepartmentCard({data,deleteDeparment }) {
  const isLoggedIn = Cookies.get('user');
  const dispatch =  useDispatch()
  const manager= localStorage.getItem("manager")
  console.log(manager,"====================")
 



  

 
  const navigate = useNavigate()
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

 

 const ratingReview = data.review || []

const departmentdata={
  "name":data.name,
  "id":data._id,
  "isEdit":true
}


 
 
  return (
    <Card
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
      <CardContent sx={{ textAlign: 'center' ,display:"grid",gridTemplateRows:"1fr 1fr 1fr",alignItems:"center",justifyContent:"center"}}>

         {manager&&<Box>
      <ModeEditOutline onClick={()=>{dispatch(setEdit(departmentdata))}}/>
      <DeleteForeverOutlined sx={{color:"red"}} onClick={()=>deleteDeparment(data._id)}/>
        </Box>}
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: '8px' }}>
          {data.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: '8px' }}>
          {`Number of Employees ${7}`}
        </Typography>
        <Typography variant="body1" sx={{ mb: '8px' ,display:"flex",color:"blue"}}>
          click the icon see the employees
          <ArrowCircleRight/>
        </Typography>
       
       
      </CardContent>
      
    </Card>
  );
}
