import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import '../styles/LeaderboardStyles.css';
import goldCup from '../images/1st-prize.png'; // Example animated GIF
import silverCup from '../images/2nd-place.png'; // Example animated GIF
import bronzeCup from '../images/bronze-cup.png'; // Example animated GIF
import leadercup from '../images/winner.png'; // Example animated GIF
import { Title } from '../styles/GamePageStyles';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/leaderboard`
        );
        setLeaderboard(response.data);

        // Simulate fetching logged-in user
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user || { username: 'Guest', totalScore: 0 });
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <Box className="loader-wrapper">
        <CircularProgress size={60} />
        <Typography variant="h6" className="loader-text">
          Loading Leaderboard...
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" className="leaderboard-container">
      <Typography variant="h3" className="leaderboard-title">
        <img 
             src={leadercup}
             alt="leader board"
             className="leaderboard-icon"
         /><Title  variant="h4" gutterBottom> Global Leaderboard </Title> 
      </Typography>

      {/* Current User Section */}
      {currentUser && (
        <Box className="current-user-box">
          <Avatar className="user-avatar">
            {currentUser?.username[0]?.toUpperCase()}
          </Avatar>
          <Typography variant="h5">Hello, {currentUser?.username}</Typography>
          <Typography variant="body1">
            Your Total Score: <strong>{currentUser?.scores?.totalScore || 0}</strong>
          </Typography>
        </Box>
      )}

      <Divider className="divider" />

      {/* Leaderboard List */}
      <Grid container spacing={4} className="leaderboard-grid">
        {leaderboard
          .sort((a, b) => b.scores.totalScore - a.scores.totalScore)
          .map((user, index) => (
            <Grid item xs={12} sm={6} md={4} key={user._id}>
              <Card
                className={`user-card ${
                  index === 0
                    ? 'gold-card'
                    : index === 1
                    ? 'silver-card'
                    : index === 2
                    ? 'bronze-card'
                    : ''
                }`}
                elevation={5}
              >
                <CardContent>
                  <Box className="user-rank">
                    {index === 0 && (
                      <img
                        src={goldCup}
                        alt="Gold Cup"
                        className="ranking-icon"
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={silverCup}
                        alt="Silver Cup"
                        className="ranking-icon"
                      />
                    )}
                    {index === 2 && (
                      <img
                        src={bronzeCup}
                        alt="Bronze Cup"
                        className="ranking-icon"
                      />
                    )}
                    {index > 2 && (
                      <Tooltip title={`Rank: ${index + 1}`}>
                        <Avatar className="rank-avatar">{index + 1}</Avatar>
                      </Tooltip>
                    )}
                    <Typography variant="h6" className="username">
                      {user?.username}
                    </Typography>
                  </Box>
                  <Typography variant="body2" className="user-score">
                    Total Score: <strong>{user?.scores?.totalScore}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Leaderboard;
