import React, { useContext, useState } from "react";
import "./card.css";
import { MdAddShoppingCart } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { dispatch } = useContext(cartContext);
  const [hasClicked, setHasClicked] = useState(false);
  const navigate = useNavigate()

  const handleAddtoCart = () => {
    if (hasClicked) {
      dispatch({ type: 'REMOVE_ITEM', productId: product.id });
    } else {
      dispatch({ type: 'ADD_TO_CART', product: product });
    }
    setHasClicked(!hasClicked);
  };

  const handleClick = () =>{
    navigate(`/products/${product.category}/${product.id}`)
  }

  return (
    <div className="product-card">
      <div className="product-img-container" onClick={handleClick}>
        <img src={product.cardImg} alt="" className="product-img"/>
        <span className="price">LKR {parseFloat(product.price).toFixed(2)}</span>
      </div>
      <div className="product-content">
        <span className="title">{product.title}</span>
        <span className="description" >{product.description}</span>
        <button className={hasClicked?"product-btn selected":"product-btn"} onClick={handleAddtoCart}>ADD  <MdAddShoppingCart/></button>
      </div>
    </div>
  );
};

export default Card;
