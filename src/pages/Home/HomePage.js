// Home.js

import React from 'react';
import { Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar1.js';
// import Sidebar2 from './Sidebar2.js';
import LabTabs from './hometabs.js'

const Home = () => {
  return (
    <Grid container>
        
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Welcome to the Home Page</Typography>
        <Typography variant="body1">This is the content of the home page.</Typography>
        <LabTabs />
      </Grid>
      <Grid item xs={3}>
        {/* <Sidebar2 /> */}
      </Grid>
    </Grid>
  );
};

export default Home;
