import React, { useState} from 'react';
import './productpage.css';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    images: [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",,
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    ],
    rating: {
      rate: 3.9,
      count: 120
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const {id} =  useParams()

  const handleNextImage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
      setFadeIn(true);
    }, 300);
  };

  const handlePreviousImage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentImageIndex(
        (currentImageIndex - 1 + product.images.length) % product.images.length
      );
      setFadeIn(true);
    }, 300);
  };

  return (
    <div className="product-page-container">
      <div className="product-images">
        <button className="carousel-button prev-button" onClick={handlePreviousImage}>
          &lt;
        </button>
        <img
          src={product.images[currentImageIndex]}
          alt={`${product.title} ${currentImageIndex + 1}`}
          className={`carousel-image ${fadeIn ? 'fade-in' : ''}`}
        />
        <button className="carousel-button next-button" onClick={handleNextImage}>
          &gt;
        </button>
      </div>

      <div className="product-details">
        <h1 className="product-title">{product.title + id}</h1>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
          <span>{'⭐'.repeat(Math.round(product.rating.rate))}</span>
          <span> ({product.rating.count} reviews)</span>
        </div>
        <p className="product-short-description">
          {product.description}
        </p>

        <div className="product-options">
          {/* Dropdowns or buttons for variants */}
        </div>

        <div className="quantity-selector">
          <label>Quantity:</label>
          <input type="number" min="1" defaultValue="1" />
        </div>

        <button className="add-to-cart-button">Add to Cart</button>
        <button className="buy-now-button">Buy Now</button>

        <div className="additional-info">
          {/* Tabs or accordion for more details */}
        </div>
      </div>

      <div className="related-products">
        {/* Related products grid */}
      </div>
    </div>
  );
};

export default ProductPage;
