import React from 'react'
import './productcard.css'

function ProductCard({title,description,cardImg,price} = {...props}) {
  return (
    <div className='product-card'>
        <div className="product-header">
            <span className="product-title">
                {title}
            </span>
            <span className="product-description">
                {description}
            </span>
        </div>
        <div className="product-image-container">
            <img src={cardImg} alt={cardImg} className="product-image" />
        </div>
        <div className="product-card-footer">
            <span className="product-price">{price}LKR</span>
            <div className="product-btn">Click</div>
        </div>
    </div>
  )
}

export default ProductCard