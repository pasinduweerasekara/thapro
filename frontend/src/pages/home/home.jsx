import React, { Suspense, useContext } from 'react'
import './home.css'

import Hero from '../../components/hero/hero'
import ProductGallery from '../../components/productgallery/productgallery'

import cardImg4 from '../../assets/4.jpg'
import CategoriesContainer from '../../components/categoriescontainer/categoriescontainer'
import { ProductContext} from '../../context/ProductsProvider'
import FeaturedProduct from '../../components/featuredproduct/featuredproduct'
function Home() {
  const productSet = useContext(ProductContext)

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Hero/>
    <FeaturedProduct image={cardImg4} price={"3250.00"} title={"Bifold wallet (Crocodile printed leather)"} description={"This is the description This is the description This is the description This is the description"} promotion={"25% off"}/>
    <span className="devider"></span>
    <ProductGallery productsSet={productSet}/>
    <CategoriesContainer/>
      </Suspense>
    </>
  )
}

export default Home
