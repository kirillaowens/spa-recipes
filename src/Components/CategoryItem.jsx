import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function CategoryItem({ category }) {
  return (
    <Card sx={{ borderRadius: 7 }}>
      <CardMedia
        component="img"
        alt={category.strCategory}
        height="auto"
        image={category.strCategoryThumb}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5">{category.strCategory}</Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button
          component={NavLink}
          variant="contained"
          to={`/category/${category.strCategory}`}
          sx={{ bgcolor: '#ff8b42', m: 1, borderRadius: 4, textTransform: 'capitalize' }}
        >
          Show category
        </Button>
      </CardActions>
    </Card>
  );
}

export default CategoryItem;
