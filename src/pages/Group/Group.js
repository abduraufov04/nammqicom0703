// Group.js

import React from 'react';
import { Grid, Typography } from '@mui/material';
import Sidebar from '../Home/Sidebar1.js';
import ImgMediaCard from './groupcard.js';
const Group = () => {
  return (
    <Grid container >
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4">Group Page</Typography>
        <Typography variant="body1">This is the content of the group page.</Typography>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Grid>
    </Grid>
  );
};

export default Group;
