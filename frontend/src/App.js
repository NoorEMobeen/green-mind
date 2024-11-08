import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import NavBar from './components/NavBar'; // Import new NavBar
import Login from './pages/Login';
import GamePage from './pages/GamePage';
import Quiz from './pages/Quiz';
import Articles from './pages/Articles';
import Register from './pages/Register';
import Leaderboard from './pages/Leaderboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const theme = createTheme();

function App() {
  const { user } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* NavBar at the top */}
        <NavBar />
        
        <Box component="main" sx={{ mt: 8, px: 2 }}> {/* Main content padding */}
          <Routes>
            <Route path="/" element={user ? <Navigate to="/game" /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/game" element={user ? <GamePage /> : <Navigate to="/" />} />
            <Route path="/quiz/:category" element={user ? <Quiz /> : <Navigate to="/" />} />
            <Route path="/articles" element={user ? <Articles /> : <Navigate to="/" />} />
            <Route path="/leaderboard" element={user ? <Leaderboard /> : <Navigate to="/" />} />
            <Route path="/logout" element={<Navigate to="/" />} /> {/* Redirect for logout */}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
