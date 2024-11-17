import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {user, setUser} = useContext(UserContext);
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
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title Section */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Trivia Game
        </Typography>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" onClick={() => handleNavigation('/game')}>Main Page</Button>
          {/* <Button color="inherit" onClick={() => handleNavigation('/quiz')}>Quiz</Button> */}
          <Button color="inherit" onClick={() => handleNavigation('/articles')}>Articles</Button>
          <Button color="inherit" onClick={() => handleNavigation('/leaderboard')}>Leaderboard</Button>
          <Button color="inherit" onClick={() =>{
            setUser(undefined);
            window.location.href = "/";
            // handleNavigation('/logout')
          } }>Logout</Button>
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
            },
          }}
        >
          <MenuItem onClick={() => handleNavigation('/game')}>Main Page</MenuItem>
          {/* <MenuItem onClick={() => handleNavigation('/quiz')}>Quiz</MenuItem> */}
          <MenuItem onClick={() => handleNavigation('/articles')}>Articles</MenuItem>
          <MenuItem onClick={() => handleNavigation('/leaderboard')}>Leaderboard</MenuItem>
          <MenuItem onClick={() => handleNavigation('/logout')}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
