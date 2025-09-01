import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getAllCategories } from '../api';
import Preloader from '../Components/Preloader';
import CategoryList from '../Components/CategoryList';

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  console.log(catalog);
  return <Box>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</Box>;
}

export default Home;
