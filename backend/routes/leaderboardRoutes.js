const express = require('express');
const router = express.Router();
const { updateUserScore, getLeaderboard } = require('../controllers/leaderboardController');

// Route to update a user's score
router.post('/update-score', updateUserScore);

// Route to get leaderboard data
router.get('/', getLeaderboard);

module.exports = router;
