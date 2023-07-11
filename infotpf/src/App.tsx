import { useState } from 'react'
import CategoriesPage from './components/CategoriesPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import RegisterPage from './components/RegistrerPage';
import ProductDetailPage from './components/ProducDeteailPage';
import CartDetailPage from './components/CartDetailPage';
import CreateProductPage from './components/CreateProductPage';
import EditProductPage from './components/EditProductPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './App.css'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registrer' element={<RegisterPage/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/products/create' element={<CreateProductPage />} />
        <Route path='/products/edit/:id' element={<EditProductPage />} />
        <Route path='/cart_detail' element={<CartDetailPage />} />
        </Routes>
    </Router>
  );
};

export default App