import { Routes, Route } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import SalesPage from "./pages/SalesPage";
import LikedPage from "./pages/LikedPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/:category' element={<CategoryPage />}></Route>
        <Route path='/:category/:id' element={<ProductPage />}></Route>
        <Route path='/loginRegister' element={<LoginRegisterPage />}></Route>
        <Route path='/sales' element={<SalesPage />}></Route>
        <Route path='/liked' element={<LikedPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
