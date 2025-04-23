import React from 'react'
import './CartButton.css'

const CartButton = ({count}) => {
  return (
    <div className="cart-button">
      <span className="cart-icon">🛒</span>
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  )
}

export default CartButton
