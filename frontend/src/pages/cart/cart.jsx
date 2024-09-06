import { useContext } from 'react'
import CartItem from '../../components/cartitem/CartItem'
import './cart.css'
import { cartContext } from '../../context/CartContextProvider'
import { ScrollRestoration } from 'react-router-dom'
const Cart = () => {
  const {cart} = useContext(cartContext)
  return (
    <div id='cart-container'>
      <ScrollRestoration />
      {cart.map(item =>(<CartItem key={item.id} item={item}/>))}
    </div>
  )
}

export default Cart
