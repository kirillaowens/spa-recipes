import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByFilter } from '../api';
import Preloader from '../Components/Preloader';
import MealList from '../Components/MealList';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMealsByFilter(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <React.Fragment>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</React.Fragment>;
}

export default Category;
