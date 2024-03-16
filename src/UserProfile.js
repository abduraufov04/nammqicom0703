// UserProfile.js
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import AuthService from './services/AuthService';


function UserProfile() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileData, setProfileData] = useState(null);


  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.loginUser(username, password);
      if (user) {
        console.log('Login successful:', user);
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Login error:', error);
    }
  };
   (e) => {
    e.preventDefault();
    fetch('https://nammqicommunity.pythonanywhere.com/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  };

  return (
    <div>
      <Typography variant="h4">User Profile</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Get Profile
        </Button>
      </form>
      {profileData && (
        <div>
          <Typography variant="h6">Profile Information{profileData.data}</Typography>
          <Typography variant="body1">Username: {profileData.username}</Typography>
          <Typography variant="body1">Full Name: {profileData.fullName}</Typography>
          <Typography variant="body1">Email: {profileData.email}</Typography>
          <Typography variant="body1">Telephone: {profileData.telephone}</Typography>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
