import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import ProducListPage from './pages/ProductListPage';
import WishListPage from './pages/WishlistPage';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Signup from './components/Auth/signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/wishlist' element={<WishListPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/productList' element={<ProducListPage />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
