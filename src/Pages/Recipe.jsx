import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getMealById } from '../api';
import Preloader from '../Components/Preloader';
import MealRecipe from '../Components/MealRecipe';

function Recipe() {
  const { id } = useParams();
  const [infoMeal, setInfoMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then((data) => setInfoMeal(data.meals[0]));
  }, [id]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!infoMeal ? <Preloader /> : <MealRecipe infoMeal={infoMeal} />}
    </Box>
  );
}

export default Recipe;
