import React from 'react';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = ({ restaurantName }) => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="restaurant-name">{restaurantName}</h1>
        <div className="header-right">
          <p className="my-orders">My Orders</p>
          <div className="cart-button">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;