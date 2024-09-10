import React, { useContext, useEffect, useState } from "react";
import "./CartItem.css";
import { MdClose } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";

export default function CartItem({ item }) {
  const { dispatch } = useContext(cartContext)
  const [quantity,setQuantity] = useState(item.quantity)
  const [totalPrice, setTotalPrice] = useState(quantity * Number(item.price))
  
useEffect(() => {
  setTotalPrice(quantity * Number(item.price))
  dispatch({
    type: "UPDATE_ITEM",
    product: item,
    quantity: quantity,
  })
}, [quantity])
  return (
    <div className="cart-item">
      <div className="cart-img-container">
        <img src={item.cardImg} alt="" className="cart-img" />
      </div>
      <div className="cart-item-description-container">
      <div className="cart-item-description">
        <span className="cart-item-title">{item.title}</span>
        <span className="singlePrice">LKR {parseFloat(item.price).toFixed(2)}</span>
        </div>
        <div className="car-item-counter-container">
        <button className="car-item-counter-btn" onClick={()=>{
          if(quantity>1)setQuantity(quantity-1)}}>-</button>
        <input value={quantity} type="number" min={1} onChange={(e) =>setQuantity(Number(e.target.value))}/>
        <button className="car-item-counter-btn" onClick={()=>setQuantity(quantity+1)}>+</button>
      </div>
      </div>
      <div className="cart-item-price" onClick={()=>{}}>
        <span className="item-total-price">LKR: {parseFloat(totalPrice).toFixed(2)}</span>
      </div>
      <button className="cart-item-delete-btn" onClick={()=>dispatch({type:'REMOVE_ITEM',productId:item.id})}>
        <MdClose />
      </button>
    </div>
  );
}
