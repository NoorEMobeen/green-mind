// QuizPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  QuizContainer,
  QuizTitle,
  QuestionContainer,
  QuestionText,
  OptionsContainer,
  OptionBox,
  CorrectOption,
  IncorrectOption,
  NextButton,
  FinalMessage,
  Loader,
  AlertContainer,
} from '../styles/QuizPageStyles';
import { CircularProgress, Alert } from '@mui/material';

const QuizPage = () => {
  const { category } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/quizzes/${category}`);
        setQuiz(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz:', error);
        setError('Could not fetch quiz');
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [category]);

  const handleAnswerSelection = (answer) => {
    const correctAnswer = quiz.questions[currentQuestionIndex].answer;
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) return <Loader><CircularProgress /></Loader>;
  if (error) return <AlertContainer><Alert severity="error">{error}</Alert></AlertContainer>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <QuizContainer>
      <QuizTitle>Awesome Quiz Application</QuizTitle>
      <QuestionContainer>
        <QuestionText>{currentQuestionIndex + 1}. {currentQuestion.question}</QuestionText>
        <OptionsContainer>
          {currentQuestion.options.map((option, index) => (
            <OptionBox
              key={index}
              style={
                selectedAnswer
                  ? option === currentQuestion.answer
                    ? CorrectOption
                    : option === selectedAnswer
                    ? IncorrectOption
                    : {}
                  : {}
              }
              onClick={() => handleAnswerSelection(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </OptionBox>
          ))}
        </OptionsContainer>
        {selectedAnswer && currentQuestionIndex < quiz.questions.length - 1 && (
          <NextButton onClick={handleNextQuestion}>Next Question</NextButton>
        )}
        {currentQuestionIndex === quiz.questions.length - 1 && selectedAnswer && (
          <FinalMessage>Quiz Complete! Well done.</FinalMessage>
        )}
      </QuestionContainer>
    </QuizContainer>
  );
};

export default QuizPage;
