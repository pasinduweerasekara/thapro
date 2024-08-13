import React, { createContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer'

export const cartContext = createContext()
const initialCart = []
const CartContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialCart)
  return (
    <cartContext.Provider value={{cart,dispatch}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider
