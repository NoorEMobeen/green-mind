import { styled } from '@mui/material/styles';
import { Box, Card, Typography, CardActionArea, CardContent } from '@mui/material';

export const Root = styled(Box)({
  padding: '32px',
  textAlign: 'center',
  backgroundColor: '#f0f4f7',
  minHeight: '100vh',
});

export const Title = styled(Typography)({
  color: '#1976d2', // Use primary color directly or adjust as per your palette
  fontWeight: 'bold',
  marginBottom: '24px', // Equivalent to theme.spacing(3)
});

export const StyledCard = styled(Card)({
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '8px', // Equivalent to theme.shape.borderRadius if you're using it
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adjusted shadow value for effect
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
  },
});

export const ActionArea = styled(CardActionArea)({
  height: '100%',
  width: '100%',
});

export const CardContentBox = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#1565c0', // Use a dark primary color directly
});

export const CardTitle = styled(Typography)({
  marginTop: '8px', // Equivalent to theme.spacing(1)
  fontWeight: 'bold',
});
