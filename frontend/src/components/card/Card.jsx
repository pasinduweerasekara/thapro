import React, { useContext, useState } from "react";
import "./card.css";
import { MdAddShoppingCart } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";

const Card = ({ product }) => {
  const { dispatch } = useContext(cartContext);
  const [hasClicked, setHasClicked] = useState(false);

  const handleAddtoCart = () => {
    if (hasClicked) {
      dispatch({ type: 'REMOVE_ITEM', productId: product.id });
    } else {
      dispatch({ type: 'ADD_TO_CART', product: product });
    }
    setHasClicked(!hasClicked);
  };

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={product.cardImg} alt="" className="product-img"/>
        <span className="price">LKR {product.price}</span>
      </div>
      <div className="product-content">
        <div className="title">{product.title}</div>
        <button className="product-btn" onClick={handleAddtoCart}><MdAddShoppingCart/></button>
      </div>
    </div>
  );
};

export default Card;
