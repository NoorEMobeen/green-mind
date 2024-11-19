import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import {
  Root,
  Title,
  StyledCard,
  ActionArea,
  CardContentBox,
  CardTitle,
  AnimatedGif,
  Subtitle,
} from '../styles/GamePageStyles';

const GamePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the quiz page and pass the category as a URL parameter
    navigate(`/quiz/${category.title.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <Root>
      {/* Title Section with an Animated Gif */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <AnimatedGif
          src="https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif"
          alt="Welcome Animation"
        />
        <Title variant="h4" gutterBottom>
          Welcome to the Quiz Portal!
        </Title>
        <Subtitle variant="subtitle1">
          Learn, challenge yourself, and expand your knowledge. 🌱
        </Subtitle>
      </Box>

      {/* Category Grid */}
      <Grid container spacing={4} justifyContent="center">
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
            <StyledCard onClick={() => handleCategoryClick(category)}>
              <ActionArea>
                <CardContentBox>
                  {category.icon}
                  <CardTitle variant="h6">{category.title}</CardTitle>
                </CardContentBox>
              </ActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Footer Message */}
      <Box mt={4}>
        <Typography variant="body2" color="textSecondary">
          🌍 *Small actions can make a big difference! Stay curious and keep learning to create a sustainable future.*
        </Typography>
      </Box>
    </Root>
  );
};

export default GamePage;
