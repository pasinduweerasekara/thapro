import React, { useState } from 'react';
import './productpage.css';

const ProductPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const productImages = [
        'https://picsum.photos/id/1018/1200/800',
        'https://picsum.photos/id/1025/1200/800',
        'https://picsum.photos/id/1043/1200/800',
        'https://picsum.photos/id/1060/1200/800'
    ];

    // Handle increment and decrement of quantity
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="product-container">
            <div className="product-image-section">
                <div className="carousel">
                    <button className="carousel-control prev" onClick={() => setCurrentImage(currentImage === 0 ? productImages.length - 1 : currentImage - 1)}>
                        &#8249;
                    </button>
                    <img src={productImages[currentImage]} alt="Product" className="product-image" />
                    <button className="carousel-control next" onClick={() => setCurrentImage(currentImage === productImages.length - 1 ? 0 : currentImage + 1)}>
                        &#8250;
                    </button>
                </div>
                <div className="thumbnail-container">
                    {productImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="product-details-section">
                <h1 className="product-title">Premium Product</h1>
                <p className="product-price">$129.99</p>
                <p className="product-description">
                    Experience luxury and quality with this premium product. Designed with the finest materials, it offers both functionality and style.
                </p>

                <div className="quantity-setter">
                    <button className="quantity-button" onClick={decrementQuantity}>-</button>
                    <input type="text" className="quantity-input" value={quantity} readOnly />
                    <button className="quantity-button" onClick={incrementQuantity}>+</button>
                </div>

                <div className="product-actions">
                    <button className="purchase-button">Purchase Now</button>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
