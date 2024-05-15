import React from 'react'
import './home.css'

import Hero from '../components/hero/hero'
import ProductGallery from '../components/productgallery/productgallery'
import FeaturedProduct from '../components/featuredproduct/featuredproduct'

import cardImg1 from '../assets/1.jpg'
import cardImg2 from '../assets/2.jpg'
import cardImg3 from '../assets/3.jpg'
import cardImg4 from '../assets/4.jpg'
import cardImg5 from '../assets/5.png'

const productsSet = [
    { id: 'product1', feature: 'feature1', title: 'Product 1 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg1 },
    { id: 'product2', feature: 'feature3', title: 'Product 2 f3', description:"This the the descriotion if product 1", price:6250, cardImg:cardImg2},
    { id: 'product3', feature: 'feature2', title: 'Product 3 f2', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg3},
    { id: 'product4', feature: 'feature3', title: 'Product 4 f3', description:"This the the descriotion if product 1", price:3200, cardImg:cardImg1},
    { id: 'product5', feature: 'feature1', title: 'Produt  5 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg5},
    { id: 'product6', feature: 'feature1', title: 'Product 1 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg2},
    { id: 'product7', feature: 'feature3', title: 'Product 2 f3', description:"This the the descriotion if product 1", price:6250, cardImg:cardImg4},
    { id: 'product8', feature: 'feature2', title: 'Product 3 f2', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg2},
    { id: 'product9', feature: 'feature3', title: 'Product 4 f3', description:"This the the descriotion if product 1", price:3200, cardImg:cardImg5},
    { id: 'product10', feature: 'feature1', title: 'Produt  5 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg3},
  ];

function Home() {
  return (
    <>
    <Hero/>
    <FeaturedProduct image={cardImg4} price={"3250.00"} title={"Bifold wallet (Crocodile printed leather)"} description={"This is the description This is the description This is the description This is the description"} promotion={"25% off"}/>
    <span className="devider"></span>
    <ProductGallery productsSet={productsSet}/>
    </>
  )
}

export default Home