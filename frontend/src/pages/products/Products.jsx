import React, { useContext } from 'react'
import './products.css'
import PageHero from '../../components/pagehero/PageHero'
import bgImg from '../../assets/1.jpg'
import { ProductContext} from '../../context/ProductsProvider'
import ProductGallery from '../../components/productgallery/productgallery'
const Products = () => {
  const productSet = useContext(ProductContext)
  return (
    <div>
      <PageHero bgimg={bgImg} pageName={"Products"}/>
      <div id="products-container">
        <div id="filters-container">
          <div id="filters-content"></div>
        </div>
      <ProductGallery productsSet={productSet}/>
      </div>
    </div>
  )
}

export default Products
