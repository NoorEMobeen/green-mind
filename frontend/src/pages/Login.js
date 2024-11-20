import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // Axios instance
import { UserContext } from '../context/UserContext';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../styles/LoginStyles.css'; // External styles for customization

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { username, password });
      setUser(response.data.user); // Store user in context
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user in local storage
      navigate('/game'); // Redirect to game page on successful login
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Box
        className="login-box"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          p: 4,
          mt: 8,
        }}
      >
        {/* Avatar Icon */}
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="login-title">
          Welcome Back!
        </Typography>

        {/* Login Form */}
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2, width: '100%' }}>
          <TextField
            label="Username"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            autoComplete="username"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            autoComplete="current-password"
          />
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </Box>

        <Button
          onClick={() => navigate('/register')}
          sx={{ mt: 2, color: 'primary.main' }}
        >
          Don’t have an account? <strong>Register</strong>
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
