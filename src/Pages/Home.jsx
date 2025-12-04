import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getAllCategories } from '../api';
import Preloader from '../Components/Preloader';
import CategoryList from '../Components/CategoryList';
import Search from '../Components/Search';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const handleSearch = (searchStr) => {
    setSearchParams({ search: searchStr });
    setFilteredCatalog(catalog.filter((item) => item.strCategory.toLowerCase().includes(searchStr.toLowerCase())));
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        data.categories.filter((item) => item.strCategory.toLowerCase().includes(query.toLowerCase()))
      );
    });
  }, [query]);

  return (
    <Box>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <Box>
          <Box sx={{ pt: 10, px: 20 }}>
            <Search cb={handleSearch} />
          </Box>
          <CategoryList catalog={filteredCatalog} />
        </Box>
      )}
    </Box>
  );
}

export default Home;
