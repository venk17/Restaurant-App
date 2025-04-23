import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState({})
  const [cartCount, setCartCount] = useState(0)

  const addToCart = dishId => {
    setCartItems(prev => {
      const newCount = (prev[dishId] || 0) + 1
      return {...prev, [dishId]: newCount}
    })
    setCartCount(prev => prev + 1)
  }

  const removeFromCart = dishId => {
    if (cartItems[dishId] && cartItems[dishId] > 0) {
      setCartItems(prev => {
        const newCount = prev[dishId] - 1
        if (newCount === 0) {
          const {[dishId]: _, ...rest} = prev
          return rest
        }
        return {...prev, [dishId]: newCount}
      })
      setCartCount(prev => prev - 1)
    }
  }

  return (
    <CartContext.Provider
      value={{cartItems, cartCount, addToCart, removeFromCart}}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
