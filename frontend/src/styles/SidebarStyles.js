// src/styles/SidebarStyles.js
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide sidebar on mobile by default
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1e1e1e', // Sustainable dark theme
    color: '#fff',
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    '&:hover': {
      backgroundColor: '#333', // Slightly lighter hover
    },
  },
  icon: {
    color: '#00c3a0', // Accent color for icons
  },
  listText: {
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
}));

export default useStyles;
