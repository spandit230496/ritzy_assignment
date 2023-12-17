import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Skeleton, CircularProgress, Box } from '@mui/material';
import DepartmentCard from '../../Component/DepartmentCard';
import AddDepartment from '../../Component/AddDepartment/AddDepartment';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDepartmentList } from '../../app/Department';

const Department = () => {
  const isLoggedin = true;

  const [department, setDepartment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const manager = true;
  
  const editState = useSelector((state) => state.edit);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  const fetchDepartments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://xyzcomp.onrender.com/department/get");
      const { data } = response;
      setDepartment(data.departments);
      dispatch(setDepartmentList(data.departments))
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    setShowModal(editState);
  }, [editState]);

  const deleteDepartment = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`http://xyzcomp.onrender.com/department/delete/${id}`);
      setIsLoading(false);
      window.location.reload()
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" className="matchmaking-page">
      <Grid container spacing={2} className="card-container">
        {isLoading ? (
          <Box sx={{ width: "100%", margin: "auto" }}>
            <Skeleton />
            <CircularProgress />
          </Box>
        ) : (
          <>
            {showModal ? <AddDepartment style={{ position: "fixed", top: "100%", right: "50%" }} /> : ""}
            {department.map((item) => (
              <Grid key={item._id} item xs={12} sm={6} md={4}>
                <div className="apartments">
                  <DepartmentCard data={item} deleteDeparment={deleteDepartment}></DepartmentCard>
                </div>
              </Grid>
            ))}

            {isLoggedin && manager && (
              <div style={{ position: 'relative' }}>
                <AddDepartment />
              </div>
            )}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Department;
