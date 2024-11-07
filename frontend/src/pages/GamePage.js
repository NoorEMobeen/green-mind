import React from 'react';
import { Box, Button, Typography, IconButton, Grid } from '@mui/material';
// import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import { styles } from '../styles/GamePageStyles'; // Import styles from GamePageStyles.js

const topics = [
  { name: 'Ocean', image: 'path/to/ocean-image.jpg' },
  { name: 'Carbon footprint', image: 'path/to/carbon-image.jpg' },
  { name: 'Pollution', image: 'path/to/pollution-image.jpg' },
  { name: 'Global warming', image: 'path/to/global-warming-image.jpg' },
  { name: 'Environment', image: 'path/to/environment-image.jpg' },
  { name: 'Animals', image: 'path/to/animals-image.jpg' },
  { name: 'Random', image: 'path/to/random-image.jpg' },
];

const GamePage = () => {
  const navigate = useNavigate();

//   const handleBack = () => navigate(-1);

  return (
    <Box sx={styles.mainContent}> {/* Full-width container */}
      {/* <IconButton color="inherit" onClick={handleBack} sx={styles.backButton}>
        <ArrowBack />
      </IconButton> */}
      <Typography sx={styles.gameTitle}>Games</Typography>

      {/* Game Topics */}
      <Box sx={styles.topicsContainer}>
        <Typography sx={styles.topicsTitle}>Choose game topic</Typography>
        <Grid container spacing={2}>
          {topics.map((topic, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={styles.topicBox}
                onClick={() => {
                  // Add any click action if needed
                }}
              >
                <img
                  src={topic.image}
                  alt={topic.name}
                  onError={(e) => {
                    e.target.src = 'path/to/placeholder-image.jpg';
                  }}
                  style={styles.topicImage}
                />
                <Typography>{topic.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Game Difficulty */}
      <Box sx={styles.difficultyContainer}>
        <Typography variant="h6" gutterBottom>Choose game difficulty</Typography>
        <Box sx={styles.difficultyButtons}>
          <Button variant="contained" color="primary">Easy</Button>
          <Button variant="contained" color="primary">Medium</Button>
          <Button variant="contained" color="primary">Hard</Button>
        </Box>
      </Box>

      {/* Start Game Button */}
      <Box sx={styles.startButtonContainer}>
        <Button variant="contained" color="success" size="large" sx={styles.startButton}>
          Let's Go!
        </Button>
      </Box>
    </Box>
  );
};

export default GamePage;
