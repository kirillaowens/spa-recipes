import React from 'react';
import { Box, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Path({ page }) {
  const isCategory = page && page.strCategory;

  return (
    <Box>
      <Breadcrumbs>
        <MuiLink component={RouterLink} underline="hover" color="inherit" to="/">
          Main
        </MuiLink>

        {isCategory && (
          <MuiLink component={RouterLink} underline="hover" color="inherit" to={`/category/${page.strCategory}`}>
            {page.strCategory}
          </MuiLink>
        )}
      </Breadcrumbs>
    </Box>
  );
}

export default Path;
