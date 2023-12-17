import React, { useEffect ,useState} from 'react';
import { Container, Typography, Paper, TextField, TextareaAutosize, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const ProfilePage = () => {
  const [userProfile,setUserProfile]=useState(null)
  const email =(localStorage.getItem("isUserLogged"))

  useEffect(() => {
    const getUserProfile = async () => {

      const {data} = await axios.post(
        "https://elegant-pea-coat-eel.cyclic.app/user/user",
        { email }
      );
      if (data && data.success) {
        setUserProfile((prev) => ({ ...prev, data }));
      } else if (data) {
        console.log("Error fetching user data: ", data.message);
      } else {
        console.log("Unexpected response from server");
      }
      
    };
  
    getUserProfile();
  }, [email,userProfile]);
  

  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
       
      {!userProfile?<CircularProgress/>:<Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
         <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <img
            style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 10px', display: 'block' }}
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            alt="User email picture"
          />
           
         
           <Typography variant="h5" align="center" style={{ marginBottom: '10px' }}>
             {userProfile && userProfile.data && userProfile.data.user.name}
           </Typography>

            <Typography variant="subtitle1" align="center" style={{ color: '#555' }}>
              {userProfile && userProfile.data && userProfile.data.user.characteristics[0].gender}
            </Typography>

          <Typography variant="subtitle1" align="center" style={{ color: '#555' }}>
            Biochemistry Technologist
          </Typography>

          <Typography variant="body1" align="center" style={{ color: '#777', marginBottom: '10px' }}>
          {`I go by the name of ${userProfile.data.user.name}. I identify as ${userProfile.data.user.characteristics[0].gender} , and I have qualities of both ${userProfile.data.user.characteristics[0].alcoholPreferences} and ${userProfile.data.user.characteristics[0].foodPreferences}.` }

          </Typography>
 
          <Typography variant="body1" align="center" style={{ color: '#555' }}>
            {/* {userProfile.email} */}
          </Typography>
            
          <Typography variant="body1" align="center" style={{ color: '#555', marginBottom: '20px' }}>
            +264 813345387
          </Typography>
          
        </div>

  
      </Paper> }
    </Container>
  );
};

export default ProfilePage;
