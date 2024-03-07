// Register.js

import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import AuthService from './../../services/AuthService';
import reCAPTCHA from "react-google-recaptcha"

import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = await AuthService.registerUser(username, email, password);
      if (newUser) {
        console.log('Registration successful:', newUser);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Registration error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{marginTop:'30%', border:'outset' , padding:'20px', borderRadius:'10px', boxShadow: '5px 5px 5px gray'}} >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <reCAPTCHA />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          <Typography color="inherit" component={Link} to="/login">Akkauntingiz bormi?</Typography>

        </form>
      </div>
    </Container>
  );
};

export default Register;
