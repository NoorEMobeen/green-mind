const User = require('../models/User');

// Function to update user scores
exports.updateUserScore = async (req, res) => {
  const { userId, category, score } = req.body;

  try {
    const user = await User.findById({_id: userId});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    let oldScore = 0;
    
    if(user.scores.category.has(category)){
      oldScore = user.scores.category.get(category);
      user.scores.category[category] = score;
    } else{
      user.scores.category.set(category, score);
    }

    user.scores.totalScore += (score - oldScore);

    await user.save();
    res.status(200).json({ message: 'Score updated successfully', user });
  } catch (error) {
    console.error('Error updating score:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get leaderboard data
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find({})
      .sort({ totalScore: -1 }) // Sort by total score in descending order
      .select('username totalScore scores'); // Select only relevant fields

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
