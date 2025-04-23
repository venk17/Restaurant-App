import React from 'react';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;