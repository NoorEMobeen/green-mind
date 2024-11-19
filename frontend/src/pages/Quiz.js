// QuizPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  QuizContainer,
  QuizHeader,
  QuestionSection,
  QuestionText,
  OptionButton,
  OptionWrapper,
  FeedbackMessage,
  NavigationButton,
  LoaderWrapper,
  ErrorMessage,
} from '../styles/QuizPageStyles';
import { CircularProgress } from '@mui/material';
import QuizFinishModal from '../components/QuizFinishModal';

const QuizPage = () => {
  const { category } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [quizTitle, setQuizTitle] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/quizzes/${category}`
        );
        setQuiz(response.data);
        setQuizTitle(response.data.category); 
        setLoading(false);
      } catch (err) {
        setError('Failed to load quiz. Please try again later.');
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [category]);

  const handleAnswerSelection = (answer) => {
    const correctAnswer = quiz.questions[currentQuestionIndex].answer;
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setIsCorrect(true);
      setScore((prev) => prev + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleQuizFinish = () => setModalOpen(true);

  if (loading) {
    return (
      <LoaderWrapper>
        <CircularProgress />
      </LoaderWrapper>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <QuizContainer>
      <QuizHeader>{quizTitle} Quiz</QuizHeader>
      <QuestionSection>
        <QuestionText>
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </QuestionText>
        <OptionWrapper>
          {currentQuestion.options.map((option, idx) => (
            <OptionButton
              key={idx}
              onClick={() => handleAnswerSelection(option)}
              disabled={selectedAnswer !== null}
              isCorrect={selectedAnswer && option === currentQuestion.answer}
              isIncorrect={selectedAnswer && option === selectedAnswer && option !== currentQuestion.answer}
            >
              {option}
            </OptionButton>
          ))}
        </OptionWrapper>
        {selectedAnswer && (
          <FeedbackMessage isCorrect={isCorrect}>
            {isCorrect ? 'Correct! 🎉' : 'Oops! That’s incorrect.'}
          </FeedbackMessage>
        )}
      </QuestionSection>
      {selectedAnswer && (
        <NavigationButton
          onClick={
            currentQuestionIndex < quiz.questions.length - 1
              ? handleNextQuestion
              : handleQuizFinish
          }
        >
          {currentQuestionIndex < quiz.questions.length - 1
            ? 'Next Question'
            : 'Finish Quiz'}
        </NavigationButton>
      )}
      <QuizFinishModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onMainPage={() => navigate('/')}
        onLeaderboard={() => navigate('/leaderboard')}
        category={category}
        score={score}
      />
    </QuizContainer>
  );
};

export default QuizPage;
