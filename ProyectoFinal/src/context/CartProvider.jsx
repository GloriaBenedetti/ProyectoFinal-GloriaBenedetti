

import React, { useState } from 'react'
import { CartContext } from './CartContext'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}