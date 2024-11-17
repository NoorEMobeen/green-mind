// src/components/Sidebar.js
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import {
  Home,
  Description,
  EmojiEvents,
  Quiz,
  ExitToApp,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <Home />, route: '/game' },
    { text: 'Articles', icon: <Description />, route: '/articles' },
    { text: 'Leaderboard', icon: <EmojiEvents />, route: '/leaderboard' },
    { text: 'Attempt Quiz', icon: <Quiz />, route: '/quiz' },
  ];

  const handleNavigation = (route) => {
    navigate(route);
    if (onClose) onClose();
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: '#1e1e1e',
          color: '#fff',
        },
      }}
    >
      <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        <IconButton onClick={onClose}>×</IconButton>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleNavigation(item.route)}
          >
            <ListItemIcon sx={{ color: '#00c3a0' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button onClick={handleLogout}>
        <ListItemIcon sx={{ color: '#00c3a0' }}>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Drawer>
  );
};

export default Sidebar;
