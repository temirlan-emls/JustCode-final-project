import { Routes, Route } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/:category' element={<CategoryPage />}></Route>
        <Route path='/:category/:id' element={<ProductPage />}></Route>
        <Route path='/about' element={<h2>hello</h2>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
