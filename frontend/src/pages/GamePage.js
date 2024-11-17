import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import {
  Root,
  Title,
  StyledCard,
  ActionArea,
  CardContentBox,
  CardTitle,
} from '../styles/GamePageStyles';

const GamePage = () => {
  const navigate = useNavigate();

  // const handleCategoryClick = (path) => {
  //   navigate(path);
  // };
  const handleCategoryClick = (category) => {
    // Navigate to the quiz page and pass the category as a URL parameter
    navigate(`/quiz/${category.title.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <Root>
      <Title variant="h4" gutterBottom>
        Choose a Quiz Category
      </Title>

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
    </Root>
  );
};

export default GamePage;
