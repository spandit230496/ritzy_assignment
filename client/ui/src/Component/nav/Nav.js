import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { useMediaQuery ,Paper} from '@mui/material';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedin = Cookies.get('user') !== undefined || localStorage.getItem('clientId');
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleLogOut = () => {
   
    localStorage.removeItem('manager');
  


    navigate('/');
  };

  const menuItems = [
    { text: 'Employees', link: '/employees' },
    { text: 'Department', link: '/department' },
    { text: isLoggedin ? 'Profile' : 'Register/Login', link: isLoggedin ? '/profile' : '/login' },
    { text: isLoggedin ? 'Log Out' : '', link: '', action: handleLogOut }
  ];

  const renderDrawer = (
    <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}  >
       <Paper style={{ width: '50vw' }}>
     
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={item.link}
            onClick={item.action || handleDrawerToggle}

            
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
    
      </Paper>
    </Drawer>
  );

  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <h1 className="link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                XYZ Comp
              </h1>
            </NavLink>
          </Typography>
          {isSmallScreen ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'block', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              {renderDrawer}
            </>
          ) : (
            <List style={{ display: 'flex', flexDirection: 'row' ,width:"45%"}}>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={NavLink}
                  to={item.link}
                  onClick={item.action || handleDrawerToggle}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
