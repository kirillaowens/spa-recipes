import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import MealRecipe from '../Components/MealRecipe';

function Recipe() {
  const { id } = useParams();
  const [infoMeal, setInfoMeal] = useState([]);

  useEffect(() => {
    getMealById(id).then((data) => setInfoMeal(data.meals[0]));
  }, [id]);

  return <MealRecipe infoMeal={infoMeal} />;
}

export default Recipe;
