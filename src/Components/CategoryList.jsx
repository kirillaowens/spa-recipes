import React from 'react';
import { Grid } from '@mui/material';
import CategoryItem from './CategoryItem';
import { useLocation } from 'react-router-dom';

function CategoryList({ catalog }) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Grid container spacing={2} sx={{ flex: 1, p: 10, px: 20 }}>
      {catalog.map((category) => (
        <Grid size={{ xs: 7, sm: 5, md: 4 }} key={category.idCategory}>
          <CategoryItem category={category} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryList;
