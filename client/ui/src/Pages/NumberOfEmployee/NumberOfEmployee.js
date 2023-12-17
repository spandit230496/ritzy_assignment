import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const NumberOfEmployee = () => {
  const { department } = useParams();
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/employee/get-dept-employee-mapping/${department}`);
        setEmployeeData(response.data.employees || []);
      } catch (error) {
        console.error('Error fetching department employee mapping:', error);
      }
    };

    fetchData();
  }, [department]);

  return (
    <div>
      <h2>Number of Employees in Department: {department}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.length>0?employeeData.map((employee) => (
              <TableRow key={employee._id}>
                <TableCell>{employee.employee_id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.address}</TableCell>
              </TableRow>
            )):<>no matching data</>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NumberOfEmployee;
