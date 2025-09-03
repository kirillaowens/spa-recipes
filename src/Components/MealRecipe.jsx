import React from 'react';
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function MealRecipe({ infoMeal }) {
  const getEmbedUrl = (url) => {
    if (!url) return null;
    return url.replace('watch?v=', 'embed/');
  };

  return (
    <Card sx={{ width: '50vw', my: 5, mx: 'auto' }}>
      <CardContent>
        <Typography variant="h3">{infoMeal.strMeal}</Typography>
        {infoMeal.strArea && <Typography variant="body1">{infoMeal.strArea}</Typography>}
        {infoMeal.strTags && <Typography variant="body1">{infoMeal.strTags}</Typography>}
      </CardContent>

      <CardMedia
        component="img"
        alt={infoMeal.strMeal}
        image={infoMeal.strMealThumb}
        sx={{ objectFit: 'cover', width: '70%', borderRadius: 5, m: 'auto' }}
      />

      <Divider sx={{ my: 2, width: '90%', mx: 'auto' }} />

      <TableContainer component={Paper} sx={{ width: '90%', mx: 'auto' }}>
        <Table aria-label="ingredients table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Ingredient</b>
              </TableCell>
              <TableCell>
                <b>Measure</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(infoMeal).map((key, idx) => {
              if (key.includes('Ingredient') && infoMeal[key]) {
                return (
                  <TableRow key={idx}>
                    <TableCell>{infoMeal[key]}</TableCell>
                    <TableCell>{infoMeal[`strMeasure${key.slice(13)}`]}</TableCell>
                  </TableRow>
                );
              }
              return null;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 2, width: '90%', mx: 'auto' }} />

      {infoMeal.strYoutube && (
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%',
            width: '90%',
            mx: 'auto',
            mb: 2,
          }}
        >
          <Box
            component="iframe"
            src={getEmbedUrl(infoMeal.strYoutube)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: 3,
            }}
          />
        </Box>
      )}
    </Card>
  );
}

export default MealRecipe;
