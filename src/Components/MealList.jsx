import React from 'react';
import { Grid } from '@mui/material';
import Meal from './Meal';

function MealList({ meals }) {
  return (
    <Grid container spacing={2} sx={{ flex: 1, py: 5 }}>
      {meals.map((meal) => (
        <Grid size={{ xs: 7, sm: 5, md: 4 }} key={meal.idMeal}>
          <Meal meal={meal} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MealList;
