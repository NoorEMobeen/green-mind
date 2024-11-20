import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loader = ({ message = "Loading, please wait..." }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e8f5e9, #f0fff4)', // Sustainable green gradient
        textAlign: 'center',
      }}
    >
      <CircularProgress
        size={70}
        thickness={5}
        sx={{
          color: '#4caf50', // Green color for sustainability
          marginBottom: 2,
        }}
      />
      <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
