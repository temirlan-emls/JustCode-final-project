import { Routes, Route } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/:category' element={<ProductsPage />}></Route>
        <Route path='/about' element={<h2>hello</h2>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
