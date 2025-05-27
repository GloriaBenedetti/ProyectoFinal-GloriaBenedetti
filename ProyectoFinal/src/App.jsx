import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';


import Footer from'./componentes/Footer'
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<ProtectedRoute><CartPage/></ProtectedRoute>
        }
        />
        <Route path="/login" element={<LoginPage />} />
       
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

