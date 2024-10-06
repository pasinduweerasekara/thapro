import React, { Suspense, useContext, useEffect, useState } from 'react'
import './home.css'

import Hero from '../../components/hero/hero'
import ProductGallery from '../../components/productgallery/productgallery'

import cardImg4 from '../../assets/4.jpg'
import CategoriesContainer from '../../components/categoriescontainer/categoriescontainer'
import { ProductContext} from '../../context/ProductsProvider'
import FeaturedProduct from '../../components/featuredproduct/featuredproduct'
import { fetchProducts } from '../../helpers/fetchProducts'
function Home() {
  const [productsSet, setProductsSet] = useState([]);
  useEffect(() => {
    const provideData = async () => {
      const products = await fetchProducts('http://localhost:3000/api/products/all',0,8); // Pass the URL as an argument
      setProductsSet(products); // Update the state with fetched products
    };

    provideData(); // Fetch products when the component mounts
  }, [])

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Hero/>
    <FeaturedProduct image={cardImg4} price={"3250.00"} title={"Bifold wallet (Crocodile printed leather)"} description={"This is the description This is the description This is the description This is the description"} promotion={"25% off"}/>
    <span className="devider"></span>
    <ProductGallery productsSet={productsSet}/>
    <CategoriesContainer/>
      </Suspense>
    </>
  )
}

export default Home
