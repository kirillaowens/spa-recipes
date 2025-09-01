import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Recipe from './Pages/Recipe';
import Category from './Pages/Category';

function App() {
  return (
    <Box
      className="App"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
