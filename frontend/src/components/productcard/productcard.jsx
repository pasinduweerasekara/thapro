import React, { useContext } from 'react'
import './productcard.css'
import { cartContext } from '../../context/CartContextProvider'

function ProductCard({product,title,description,cardImg,price} = {...props}) {

    const {cart,dispatch} = useContext(cartContext)

  return (
    <div className='product-card'>
        <div className="product-image-container">
        <span className="product-price">{price}LKR</span>
            <img src={cardImg} alt={cardImg} className="product-image" />
        </div>
        <div className="product-card-footer">
            <span className="product-title">
                {title}
            </span>
            <span className="product-description">
                {description}
            </span>
        </div>
    </div>
  )
}

export default ProductCard