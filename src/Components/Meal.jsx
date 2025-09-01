import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Meal({ meal }) {
  return (
    <Card sx={{ borderRadius: 7 }}>
      <CardMedia
        component="img"
        alt={meal.strMeal}
        height="auto"
        image={meal.strMealThumb}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5">{meal.strMeal}</Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button
          component={NavLink}
          variant="contained"
          to={`/${meal.idMeal}`}
          sx={{ bgcolor: '#ff8b42', m: 1, borderRadius: 4, textTransform: 'capitalize' }}
        >
          Show recipe
        </Button>
      </CardActions>
    </Card>
  );
}

export default Meal;
