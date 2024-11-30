// QuizPageStyles.js
import styled, { css } from 'styled-components';

// General container for the quiz
export const QuizContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Header title of the quiz
export const QuizHeader = styled.h1`
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 20px;
`;

// Section containing question and options
export const QuestionSection = styled.div`
  margin-bottom: 30px;
`;

// Question text
export const QuestionText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

// Wrapper for options
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Individual option button
export const OptionButton = styled.button`
  background: ${(props) => (props.isCorrect ? '#d4edda' : props.isIncorrect ? '#f8d7da' : '#ffffff')};
  border: ${(props) => (props.isCorrect ? '2px solid #28a745' : props.isIncorrect ? '2px solid #dc3545' : '2px solid #dee2e6')};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.isCorrect ? '#28a745' : props.isIncorrect ? '#dc3545' : '#333')};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.02)')};
    background-color: ${(props) => (props.disabled ? 'none' : '#e9ecef')};
  }
`;

// Feedback message (correct or incorrect)
export const FeedbackMessage = styled.p`
  font-size: 1.2rem;
  color: ${(props) => (props.isCorrect ? '#28a745' : '#dc3545')};
  margin-top: 15px;
`;

// Navigation button (Next/Finish)
export const NavigationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Loader wrapper
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

// Error message for failed loading
export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #dc3545;
  text-align: center;
`;
export const FallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #fdf5f6;
  border: 1px solid #f28b82;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
`;