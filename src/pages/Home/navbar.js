import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        salom
        <Typography variant="h6" >
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/group">Group</Button>
        {/* Add more buttons for other routes */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
