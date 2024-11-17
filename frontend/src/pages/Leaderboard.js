import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';
import '../styles/LeaderboardStyles.css'; // Custom styles

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard`);
        setLeaderboard(response.data);

        // Simulate fetching logged-in user
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user || { username: "Guest", totalScore: 0 });
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <Container maxWidth="md" className="leaderboard-container">
      <Typography variant="h3" className="leaderboard-title">
        🏆 Leaderboard
      </Typography>

      {/* Current User Section */}
      {currentUser && (
        <Box className="current-user-box">
          <Typography variant="h5">Welcome, {currentUser?.username}</Typography>
          <Typography variant="body1">Your Total Score: {currentUser?.scores?.totalScore || 0}</Typography>
        </Box>
      )}

      {/* Leaderboard List */}
      <Grid container spacing={3}>
        {leaderboard.map((user, index) => (
          <Grid item xs={12} sm={6} key={user._id}>
            <Card className="user-card">
              <CardContent>
                <Typography variant="h6">
                  {index + 1}. {user?.username}
                </Typography>
                <Typography variant="body2">Total Score: {user?.scores?.totalScore}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Leaderboard;
