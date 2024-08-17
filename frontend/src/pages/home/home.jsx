import React, { useContext } from 'react'
import './home.css'

import Hero from '../../components/hero/hero'
import ProductGallery from '../../components/productgallery/productgallery'

import cardImg4 from '../../assets/4.jpg'
import CategoriesContainer from '../../components/categoriescontainer/categoriescontainer'
import { ProductContext} from '../../context/ProductsProvider'
import FeaturedProduct from '../../components/featuredproduct/featuredproduct'
import cardImg from '../../assets/1.jpg'
function Home() {

  const product = {
    id: "product1",
    feature: "feature1",
    title: "crock print brown card holder (veg tan)",
    description:
      " ll be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 4500,
    cardImg: cardImg,
  }

  const productSet = useContext(ProductContext)

  return (
    <>
    <Hero/>
    <FeaturedProduct image={cardImg4} price={"3250.00"} title={"Bifold wallet (Crocodile printed leather)"} description={"This is the description This is the description This is the description This is the description"} promotion={"25% off"}/>
    <span className="devider"></span>
    <ProductGallery productsSet={productSet}/>
    <CategoriesContainer/>
    </>
  )
}

export default Home
