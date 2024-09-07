import React, { useContext, useState } from "react";
import "./card.css";
import { MdAddShoppingCart } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { dispatch } = useContext(cartContext);
  const [hasClicked, setHasClicked] = useState(false);
  const navigate = useNavigate();

  const handleAddtoCart = () => {
    if (hasClicked) {
      dispatch({ type: 'REMOVE_ITEM', productId: product.id });
    } else {
      dispatch({ type: 'ADD_TO_CART', product: product, quantity:1 });
    }
    setHasClicked(!hasClicked);
  };

  const handleClick = () => {
    navigate(`/products/${product.category}/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-img-container" onClick={handleClick}>
        <img src={product.cardImg} alt="" className="product-img" />
        <span className="price">LKR {parseFloat(product.price).toFixed(2)}</span>
      </div>
      <div className="product-content" onClick={handleClick}>
        <span className="title">{product.title}</span>
        <span className="description">{product.description}</span>
      </div>
      <button
        className={hasClicked ? "product-btn selected" : "product-btn"}
        onClick={handleAddtoCart}
      >
        {hasClicked ? "REMOVE" : "ADD"} <MdAddShoppingCart />
      </button>
    </div>
  );
};

export default Card;
