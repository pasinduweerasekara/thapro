import React, { useContext, useState } from "react";
import "./card.css";
import { MdAddShoppingCart } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";
const Card = ({ product }) => {

    const {dispatch} = useContext(cartContext)
    const [hasClicked, setHasClicked] = useState(false)


    const handleAddtoCart = ()=>{
        if (false){
            dispatch({type:'REMOVE_ITEM',productId:product.id})
            
        }else{
            dispatch({type:'ADD_TO_CART',product:product})
        }
        setHasClicked(!hasClicked)
    }

  return (
    <div className="card">

      <div className="card__img">
        <img src={product.cardImg} alt="" />
      </div>

      <div className="card-content">
        <div className="card__title">{product.title}</div>
        <div className="card__subtitle">
         {product.description}
        </div>
        <div className="card__wrapper">
          <div className="card__price">LKR {product.price}</div>
          <div className="card__btn__container">
            <button className={hasClicked?"card__btn selected":"card__btn" }onClick={handleAddtoCart}><MdAddShoppingCart/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
