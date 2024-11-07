import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const response = await api.get('/users/leaderboard');
            setLeaderboard(response.data);
        };
        fetchLeaderboard();
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={index}>
                        {index + 1}. {user.username} - {user.score} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
