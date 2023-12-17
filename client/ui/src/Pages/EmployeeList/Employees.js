import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardComponent from '../../Component/CardComponent';
import axios from 'axios';
import {ArrowUpward,ArrowDownward } from "@mui/icons-material"
import matchmakingcss from './matchmaking.css';
import { Skeleton,CircularProgress, Box, Button } from '@mui/material';
import EmployeeDetails from '../EmployeeDetails';

const Employees = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]= useState(false)
  const [direction,setDirection]= useState(null)
  const [showModal,setShowModal]= useState(false)

  const [filters, setFilters] = useState({
    gender: "",
    foodPreferences: "",
    smokePreferences: "",
    alcoholPreferences: "",
  });

  const handleChange = (e, filterName) => {
    const value = e.target.value;

    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await axios.get('http://localhost:8080/employee/employee');
        setIsLoading(false)
        setData(result.data.employees);
      } catch (e) {
        console.log("User Can't be Fetched");
      }
    };

    fetchData();

    console.log('useEffect executed');
  }, []); 

   const sortByLocation =async ()=>{
    try{
      setIsLoading(true)
    const result= await axios.get("http://localhost:8080/employee/sort-by-location")
    setIsLoading(false)
    setData(result.data.employees)
    }
    catch(e){
      console.log(e)
    }
   }

   const sortByName =async ()=>{
    try{
      setIsLoading(true)
    const result= await axios.get(`http://localhost:8080/employee/sort-by-name?sortOrder=${direction}`)
    setIsLoading(false)
    setData(result.data.employees)
    }
    catch(e){
      console.log(e)
    }
   }

   useEffect(()=>{
    sortByName()
   },[direction])

   const handleDelete =  async (id)=>{
    setIsLoading(true)
    try{
      const response = await axios.delete(`http://localhost:8080/employee/delete/${id}`)
      setIsLoading(false)
      window.location.reload()
    }
    catch(e){
      console.log(e)
    }
  }
  


  return (
    <Container maxWidth="lg" className="matchmaking-page">
         <div className='filter-box' style={{ width: '100%', overflowX: 'auto'}}>
        <div className="gender-preferences">
          <h5>Filter by</h5>
           <Button variant='contained' onClick={sortByLocation}>Location</Button>
        </div>

        <div className="food-preferences">
          <h5>Filter by</h5>
          <Button variant='outlined'>Name</Button>
         
            <ArrowUpward onClick={()=>{
              setDirection("asc")
            }}/>
            <ArrowDownward onClick={()=>setDirection("desc")}/>
         
        </div>

       
      </div>
      

      <Grid container spacing={2} className="card-container">
     {isLoading ? (
       <Box sx={{ width: "100%", margin: "auto" }}>
    <CircularProgress/>
    
      </Box>
) : (
  <>
    {data.length > 0 ? (
      data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardComponent
            data={item}
            setshowModal={showModal}
            handleDelete ={handleDelete}
          />
        </Grid>
      ))
      
    ) : (
      <div>No data available</div>
    )}
  </>
)}

      </Grid>
    </Container>
  );
};

export default Employees;