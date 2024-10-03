import React, {useContext, useState } from 'react';
import './productpage.css';
import { ScrollRestoration, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductsProvider';
import { cartContext } from '../../context/CartContextProvider';



const ProductPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { dispatch } = useContext(cartContext);

    // for testing
const {id} = useParams()
const productsSet =useContext(ProductContext)
const product = productsSet.filter((product)=> id===product.slug)[0]
// for testing

    const productImages = product.images

    // Handle increment and decrement of quantity
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const handleAddToCart = ()  =>{
      dispatch({
        type:'ADD_TO_CART',
        product: product,
        quantity: quantity,
      })
    }

    return (
        <div className="product-container">
          <ScrollRestoration/>
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
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">LKR {parseFloat(product.price).toFixed(2)}</p>
                <p className="product-description">
                    {product.description}</p>

                <div className="quantity-setter">
                    <button className="quantity-button" onClick={decrementQuantity}>-</button>
                    <input type="text" className="quantity-input" value={quantity} readOnly />
                    <button className="quantity-button" onClick={incrementQuantity}>+</button>
                </div>

                <div className="product-actions">
                    <button className="purchase-button">Purchase Now</button>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
