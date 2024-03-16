import React, { useState, useEffect } from 'react';
import { Avatar, Grid, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';



const ProfilePage = ({ apiUrl }) => {
  const [profileData, setProfileData] = useState(null);
  apiUrl = 'https://nammqicommunity.pythonanywhere.com/login/';

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [apiUrl]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { fullName, username, email, phoneNumber, profilePhoto, recentPosts } = profileData;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Avatar alt={fullName} src={profilePhoto} style={{ width: '150px', height: '150px', margin: '0 auto 20px' }} />
          <Typography variant="h6">{fullName}</Typography>
          <Typography variant="subtitle1" color="textSecondary">@{username}</Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>{email}</Typography>
          <Typography variant="body2" color="textSecondary">{phoneNumber}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>Recent Posts</Typography>
          <List>
            {recentPosts.map((post, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText primary={post.title} secondary={post.date} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
