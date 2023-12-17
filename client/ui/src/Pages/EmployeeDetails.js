import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const EmployeeDetails = () => {
  const cardDetails = useSelector((state) => state.showModal.cardDetails.data);

  if (!cardDetails) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5">No Employee Details Available</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{cardDetails.name}</Typography>
        <Typography variant="subtitle1">{cardDetails.position}</Typography>
        <Typography variant="body2">{cardDetails.employee_id}</Typography>
      </CardContent>
    </Card>
  );
};

export default EmployeeDetails;
