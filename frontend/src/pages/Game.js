import React from 'react';
import { useNavigate } from 'react-router-dom';

const Game = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        // Navigate to Quiz page
        navigate('/quiz');
    };

    return (
        <div>
            <h2>Select a Game Category and Difficulty</h2>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};

export default Game;
