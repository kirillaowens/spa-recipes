import React from 'react';
import { Box, Typography } from '@mui/material';

function MealRecipe({ infoMeal }) {
  return (
    <Box>
      <Typography variant="h5">{infoMeal.strMeal}</Typography>
    </Box>
  );
}

export default MealRecipe;
