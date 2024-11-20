import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(to right, #4caf50, #2e7d32)', // Sustainable theme gradient
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title Section */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif',
            cursor: 'pointer',
            '&:hover': { color: '#a5d6a7' },
          }}
          onClick={() => handleNavigation('/game')}
        >
          🌿 Trivia Quiz
        </Typography>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Tooltip title="Main Page" arrow>
            <Button
              startIcon={<HomeIcon />}
              color="inherit"
              onClick={() => handleNavigation('/game')}
              sx={{
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              Main Page
            </Button>
          </Tooltip>
          <Tooltip title="Articles" arrow>
            <Button
              startIcon={<ArticleIcon />}
              color="inherit"
              onClick={() => handleNavigation('/articles')}
              sx={{
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              Articles
            </Button>
          </Tooltip>
          <Tooltip title="Leaderboard" arrow>
            <Button
              startIcon={<EmojiEventsIcon />}
              color="inherit"
              onClick={() => handleNavigation('/leaderboard')}
              sx={{
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              Leaderboard
            </Button>
          </Tooltip>
          <Tooltip title="Logout" arrow>
            <Button
              startIcon={<LogoutIcon />}
              color="inherit"
              onClick={() => {
                setUser(undefined);
                window.location.href = '/';
              }}
              sx={{
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              Logout
            </Button>
          </Tooltip>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              width: '200px',
              mt: 2,
              background: 'linear-gradient(to right, #4caf50, #2e7d32)',
              color: '#fff',
            },
          }}
        >
          <MenuItem onClick={() => handleNavigation('/game')}>
            Main Page
          </MenuItem>
          <MenuItem onClick={() => handleNavigation('/articles')}>
            Articles
          </MenuItem>
          <MenuItem onClick={() => handleNavigation('/leaderboard')}>
            Leaderboard
          </MenuItem>
          <MenuItem
            onClick={() => {
              setUser(undefined);
              window.location.href = '/';
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
