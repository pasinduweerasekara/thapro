import React, { useContext } from 'react'
import Hero from '../components/hero/hero'
import ProductGallery from '../components/productgallery/productgallery'
import { productContext } from '../context/ProductsProvider'
import FeaturedProduct from '../components/featuredproduct/featuredproduct'
import cardImg4 from '../assets/4.jpg'

function Home() {

  const productSet = useContext(productContext)

  return (
    <>
    <Hero/>
    <FeaturedProduct image={cardImg4} price={"3250.00"} title={"Bifold wallet (Crocodile printed leather)"} description={"This is the description This is the description This is the description This is the description"} promotion={"25% off"}/>
    <span className="devider"></span>
    <ProductGallery productsSet={productSet}/>
    </>
  )
}

export default Home