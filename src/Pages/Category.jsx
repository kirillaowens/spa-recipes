import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getMealsByFilter } from '../api';
import Preloader from '../Components/Preloader';
import MealList from '../Components/MealList';
import Path from '../Components/Path';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMealsByFilter(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <Box sx={{ pt: 5, px: 20 }}>
      <Path page={meals} />
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </Box>
  );
}

export default Category;
