import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'; // Import Home page
import Cart from './pages/Cart'; // Import Cart page
import Checkout from './pages/Checkout'; // Import Checkout page
import Confirmation from './pages/Confirmation '; // Import Confirmation page
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path="home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />

      </Route>
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
