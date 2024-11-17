// QuizPageStyles.js

import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4ff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const QuizTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const QuestionText = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 15px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionBox = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background: #e6e9f4;
  border: 2px solid #e6e9f4;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d4d9e6;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

// export const CorrectOption = styled(OptionBox)`
//   background-color: #d4f7d4 !important;
//   border: 2px solid #4caf50;
//   color: #4caf50;
//   position: relative;
//   &:after {
//     content: '✓';
//     position: absolute;
//     right: 15px;
//     color: #4caf50;
//     font-size: 1.2em;
//   }
// `;

// export const IncorrectOption = styled(OptionBox)`
//   background-color: #f7d4d4 !important;
//   border: 2px solid #f44336;
//   color: #f44336;
//   position: relative;
//   &:after {
//     content: '✗';
//     position: absolute;
//     right: 15px;
//     color: #f44336;
//     font-size: 1.2em;
//   }
// `;

export const CorrectOption = {
  backgroundColor: '#d4f7d4',
  border: '2px solid #4caf50',
  color: '#4caf50',
};

export const IncorrectOption = {
  backgroundColor: '#f7d4d4',
  border: '2px solid #f44336',
  color: '#f44336',
};

export const NextButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1976d2;
  }
`;

export const FinalMessage = styled.p`
  font-size: 1.2em;
  color: #333;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

export const AlertContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;
