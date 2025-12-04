import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getMealById } from '../api';
import Preloader from '../Components/Preloader';
import MealRecipe from '../Components/MealRecipe';
import Path from '../Components/Path';

function Recipe() {
  const { id } = useParams();
  const [infoMeal, setInfoMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then((data) => setInfoMeal(data.meals[0]));
  }, [id]);

  return (
    <Box sx={{ pt: 5, px: 20 }}>
      <Path page={infoMeal} />
      {!infoMeal ? <Preloader /> : <MealRecipe infoMeal={infoMeal} />}
    </Box>
  );
}

export default Recipe;
