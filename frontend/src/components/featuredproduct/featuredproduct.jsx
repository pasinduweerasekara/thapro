import { useNavigate } from "react-router-dom";
import "./featuredproduct.css";
import React from "react";

function FeaturedProduct(
  { image, price, promotion, title, description,category,slug } = { ...props }
) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const navigateLocation = `/products/${category}/${slug}`
    navigate(navigateLocation)
  };
  return (
    <div id="featured-product-container">
      <h1 id="featured-product-container-heading"></h1>
      <div id="featured-product">
        <div id="featured-product-image-container">
          <img src={image} alt={image} className="featured-product-image" />
          <span id="featured-product-price">LKR {price}</span>
          <span id="featured-product-promotion">{promotion}</span>
        </div>
        <div id="featured-product-text-container">
          <span id="product-title">{title}</span>
          <span id="product-description">{description}</span>
          <button id="feature-product-btn" onClick={handleNavigate}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
