import React from 'react'
import {useCart} from '../../context/CartContext'
import './DishCard.css'

const DishCard = ({dish}) => {
  const {cartItems, addToCart, removeFromCart} = useCart()
  const quantity = cartItems[dish.dish_id] || 0

  const {
    dish_id,
    dish_name,
    dish_price,
    dish_currency,
    dish_description,
    dish_calories,
    dish_image,
    dish_Availability,
    addonCat,
  } = dish

  return (
    <div className={`dish-card ${!dish_Availability ? 'unavailable' : ''}`}>
      <div className='dish-info'>
        <div className='dish-details'>
          <h3 className='dish-name'>{dish_name}</h3>
          <p className='dish-price'>
            {dish_currency} {dish_price.toFixed(2)}
          </p>
          <p className='dish-description'>{dish_description}</p>

          {addonCat && addonCat.length > 0 && (
            <p className='customization'>Customizations available</p>
          )}

          {!dish_Availability && <p className='availability'>Not available</p>}

          <p className='dish-calories'>{dish_calories} calories</p>
        </div>

        <div className='dish-image-container'>
          {dish_image && (
            <img src={dish_image} alt={dish_name} className='dish-image' />
          )}

          {dish_Availability && (
            <div className='quantity-control'>
              <button
                onClick={() => removeFromCart(dish_id)}
                disabled={quantity === 0}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => addToCart(dish_id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DishCard
