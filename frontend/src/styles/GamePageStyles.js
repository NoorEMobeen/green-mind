import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Typography,
  CardActionArea,
  CardContent,
} from '@mui/material';

// Root Container
export const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: '#e8f5e9', // Soft green for a sustainable theme
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

// Main Title
export const Title = styled(Typography)(({ theme }) => ({
  color: '#1b5e20', // Deep green to match the sustainable theme
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)',
}));

// Subtitle
export const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#4caf50',
  fontStyle: 'italic',
  marginBottom: theme.spacing(2),
}));

// Animated Gif for Welcome Section
export const AnimatedGif = styled('img')({
  width: '120px',
  height: '120px',
  marginBottom: '16px',
  borderRadius: '50%',
});

// Styled Card for Categories
export const StyledCard = styled(Card)(({ theme }) => ({
  height: '220px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  },
}));

// Card Action Area
export const ActionArea = styled(CardActionArea)({
  height: '100%',
  width: '100%',
});

// Card Content
export const CardContentBox = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#1b5e20',
});

// Card Title
export const CardTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: 'bold',
  textAlign: 'center',
}));
