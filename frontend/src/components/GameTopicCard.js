// src/components/GameTopicCard.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const GameTopicCard = ({ topic }) => {
  return (
    <Box
      sx={{
        width: '100px',
        height: '100px',
        backgroundColor: '#333',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <Box
        component="img"
        src={topic.img}
        alt={topic.name}
        sx={{
          width: '60%',
          height: 'auto',
          marginBottom: 1, // This replaces theme.spacing(1)
        }}
      />
      <Typography
        variant="body1"
        sx={{
          color: '#fff',
          fontSize: '14px',
        }}
      >
        {topic.name}
      </Typography>
    </Box>
  );
};

export default GameTopicCard;
