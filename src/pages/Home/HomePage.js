// Home.js

import React from 'react';
import { Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar1.js';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4">Welcome to the Home Page</Typography>
        <Typography variant="body1">This is the content of the home page.</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
