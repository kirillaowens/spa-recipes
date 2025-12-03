import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';
import Category from '../Pages/Category';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/:id" element={<Recipe />} />
      </Routes>
    </Router>
  )
}

export default Main;
