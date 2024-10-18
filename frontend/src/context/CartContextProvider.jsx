import React, { createContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../reducers/cartReducer';

export const cartContext = createContext();
const initialCart = JSON.parse(localStorage.getItem('cart')) || []; // Load from local storage

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Effect to save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
