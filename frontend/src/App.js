import React, { useContext, Suspense, lazy, useEffect, useState } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { UserContext } from './context/UserContext';
import NavBar from './components/NavBar'; 
import Login from './pages/Login';
import Register from './pages/Register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Loader from './components/Loader';

// Lazy load pages
const GamePage = lazy(() => import('./pages/GamePage'));
const Quiz = lazy(() => import('./pages/Quiz'));
const ArticlesHub = lazy(() => import('./pages/ArticlesHub'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Article = lazy(() => import('./pages/Article'));

const theme = createTheme();

function App() {
  const { user, setUser } = useContext(UserContext); // Destructure UserContext for updating `user`
  const [isAuthChecking, setIsAuthChecking] = useState(true); // Track user loading state

  // Simulate checking user authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulating an async check for user authentication
        const storedUser = JSON.parse(localStorage.getItem('user')); // Retrieve user from local storage
        if (storedUser) {
          // Update user context with stored user data
          setUser(storedUser);
        } else {
          // Handle unauthenticated state
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setUser(null); // Ensure `user` is set to null in case of errors
      } finally {
        setIsAuthChecking(false); // Stop showing loader after user check
      }
    };
    checkAuth();
  }, [setUser]);

  // Show a loader while checking user authentication
  if (isAuthChecking) {
    return <Loader message="Checking authentication..." />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Render NavBar only if user is logged in */}
        {user && <NavBar />}

        <Box component="main" sx={{ mt: 8, px: 2 }}>
          <Suspense fallback={<Loader message="Loading content..." />}>
            <Routes>
              {/* Login or redirect */}
              <Route
                path="/"
                element={user ? <Navigate to="/game" /> : <Login />}
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/game"
                element={user ? <GamePage /> : <Navigate to="/" />}
              />
              <Route
                path="/quiz/:category"
                element={user ? <Quiz /> : <Navigate to="/" />}
              />
              <Route
                path="/articles"
                element={user ? <ArticlesHub /> : <Navigate to="/" />}
              />
              <Route
                path="/articles/:category"
                element={user ? <Article /> : <Navigate to="/" />}
              />
              <Route
                path="/leaderboard"
                element={user ? <Leaderboard /> : <Navigate to="/" />}
              />
              <Route path="/logout" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
