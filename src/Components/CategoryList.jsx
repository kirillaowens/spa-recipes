import React from 'react';
import { Grid } from '@mui/material';
import CategoryItem from './CategoryItem';

function CategoryList({ catalog }) {
  return (
    <Grid container spacing={2} sx={{ flex: 1, py: 10, px: 20 }}>
      {catalog.map((category) => (
        <Grid size={{ xs: 7, sm: 5, md: 4 }} key={category.idCategory}>
          <CategoryItem category={category} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryList;
