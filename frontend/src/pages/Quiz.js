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
} from '../styles/QuizPageStyles';
import QuizFinishModal from '../components/QuizFinishModal';
import { getQuiz, saveQuiz } from './../utils/db.ts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader.js';
import FallbackPage from '../components/FallbackPage';

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
  const [isOffline, setIsOffline] = useState(false);
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
        saveQuiz(response.data);
        setLoading(false);
      } catch (err) {
        if (err?.message === 'Network Error') {
          setIsOffline(true);
          const cachedQuiz = await getQuiz(category);
          if (cachedQuiz) {
            setQuiz(cachedQuiz);
            setQuizTitle(cachedQuiz?.category);
            toast.info('You are offline. Loaded cached quiz.');
          } else {
            toast.error('Failed to load quiz. Please try again later.');
            setError('Failed to load quiz. Please try again later.');
          }
        } else {
          toast.error('Failed to load quiz. Please try again later.');
          setError('Failed to load quiz. Please try again later.');
        }
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
    return <Loader message="Fetching Quiz..." />;
  }

  if (error) {
    return (
      <div className="fallback-container">
        <ToastContainer />
        <FallbackPage
          title="Quiz Not Found"
          message={
            isOffline
              ? 'You are offline, and no cached quiz is available for this category.'
              : 'The requested quiz could not be found. Please try again later.'
          }
          redirectTo="/game"
          redirectText="Go Back to Main Menu"
        />
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <>
      <ToastContainer />
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
                isIncorrect={
                  selectedAnswer &&
                  option === selectedAnswer &&
                  option !== currentQuestion.answer
                }
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
    </>
  );
};

export default QuizPage;
