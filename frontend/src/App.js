import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Login from './pages/Login';
import GamePage from './pages/GamePage';
import Quiz from './pages/Quiz';
import Articles from './pages/Articles';
import Register from './pages/Register';
import Leaderboard from './pages/Leaderboard';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styles } from './styles/AppStyles'; // Import JSS styles

const theme = createTheme();

function App() {
  const { user } = useContext(UserContext);
  const showSidebar = !['/login', '/register'].includes(window.location.pathname);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex">
          {/* Sidebar setup */}
          {showSidebar && (
            <Box sx={styles.sidebarPermanentDrawer}> {/* Adjusted to always display Sidebar */}
              <Sidebar />
            </Box>
          )}

          {/* Main Content */}
          <Box component="main" sx={styles.mainContent}> {/* Use JSS styles */}
            <Routes>
              <Route path="/" element={user ? <Navigate to="/game" /> : <Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/game" element={user ? <GamePage /> : <Navigate to="/" />} />
              <Route path="/quiz" element={user ? <Quiz /> : <Navigate to="/" />} />
              <Route path="/articles" element={user ? <Articles /> : <Navigate to="/" />} />
              <Route path="/leaderboard" element={user ? <Leaderboard /> : <Navigate to="/" />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
