import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/QuizFinishModal.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizFinishModal = ({
  isOpen,
  onClose,
  onLeaderboard,
  onMainPage,
  category,
  score,
}) => {
  const navigate = useNavigate();
 
  useEffect(() => {
    if (isOpen) {
      // Scroll to the top of the page when the modal opens
      // Updating scores before navigating to leaderboard.
      const user = JSON.parse(localStorage.getItem('user'));
      try {
        let oldScore = user?.scores?.category[category] || -1;
        if (oldScore < score) {
          updateUserScore(user._id, category, score);
        }
      } catch (error) {
        console.error('Error updating user score:', error);
        updateUserScore(user._id, category, score);
      }
    }
  }, [isOpen]);

  const updateUserScore = async (userId, category, score) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/leaderboard/update-score`,
        {
          userId,
          category,
          score,
        }
      );
      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User score updated:', response.data);
    } catch (error) {
      console.error('Error updating user score:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You’ve completed the quiz!</p>
        <p>Your score: {score}</p>
        <div className="button-group">
          <button className="modal-button" onClick={onLeaderboard}>
            See Leaderboard
          </button>
          <button className="modal-button" onClick={onMainPage}>
            Go to Main Page
          </button>
        </div>

        <div className="article-link">
          <button
            className="modal-cta-button"
            onClick={() =>
              navigate(
                `/articles/${category.toLowerCase().replace(/\s+/g, '-')}`
              )
            }
          >
            Want to learn more about {category}? Read our article!
          </button>
        </div>

        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

QuizFinishModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
  onMainPage: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default QuizFinishModal;
