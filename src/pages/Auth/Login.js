// Login.js

import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import AuthService from './../../services/AuthService';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
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

  return (
    <Container component="main" maxWidth="xs">
      <div style={{marginTop:'30%', border:'outset' , padding:'20px', borderRadius:'10px', boxShadow: '5px 5px 5px gray'}}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          <Typography color="inherit" component={Link} to="/registration">Akkauntingiz yo'qmi?</Typography>


        </form>
      </div>
    </Container>
  );
};

export default Login;
