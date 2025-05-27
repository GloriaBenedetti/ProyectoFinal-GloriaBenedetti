
import React from 'react'
import { useContext } from 'react'
export const CartContext= React.createContext()
export const useCart=()=>
  useContext(CartContext)