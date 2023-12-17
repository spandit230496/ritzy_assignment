import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ArrowCircleRight, DeleteForever, EditOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setShowDetails } from '../app/ShowDetails'; // Correct import path
import axios from 'axios';
import { CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import EditModal from './EditedData';

export default function BioCard({ data, handleDelete }) {
  const manager = localStorage.getItem('manager');
  const [loading, setLoading] = useState(false);
  const isLogin = useSelector((state) => state.setLogin);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({ ...data });

  const cardDetails = {
    data: data,
    showModal: true,
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const dispatch = useDispatch();

  const handleSeeMoreDetails = () => {
    navigate('/employee');
    dispatch(setShowDetails(cardDetails));
  };

  const handleEditModalOpen = () => {
    setEditedData({ ...data }); // Reset to original data
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleEditSubmit = async (editedData) => {
     try{
      setLoading(true)
      const reposne = await axios.put("http://localhost:8080/employee/assign-department/",editedData)
      setLoading(false)
      setEditModalOpen(false); 
     }
     catch(e){
      console.log(e)
     }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
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
          {manager && (
            <Box sx={{ float: 'left', width: '100%' }}>
              <EditOutlined onClick={handleEditModalOpen} />
              <DeleteForever sx={{ color: 'red' }} onClick={() => handleDelete(data.employee_id)} />
            </Box>
          )}
          <CardContent
            sx={{
              textAlign: 'center',
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar src="/static/images/avatar/1.jpg" sx={{ width: '80px', height: '80px', margin: 'auto' }} />

            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: '8px' }}>
              {editedData.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: '8px' }}>
              {`Employee id : ${editedData.employee_id}`}
            </Typography>
            <Typography variant="body1" sx={{ mb: '8px' }}>
              {`Employee Address : ${editedData.address}`}
            </Typography>
            <Typography variant="body1" sx={{ mb: '8px' }}>
              {`Employee Department : ${editedData.department}`}
            </Typography>
            

            {manager ? (
              <Typography variant="body2" sx={{ textAlign: 'justify', mb: '16px', display: 'flex' }}>
                See More Details <ArrowCircleRight sx={{ color: 'blue' }} onClick={handleSeeMoreDetails} />
              </Typography>
            ) : (
              ''
            )}
          </CardContent>
        </Card>
      )}

          <EditModal
          open={editModalOpen}
          handleClose={handleEditModalClose}
          initialData={editedData}
          handleEditSubmit={handleEditSubmit}
        />
    </>
  );
}
