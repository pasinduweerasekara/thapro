import React from 'react'
import './products.css'
import PageHero from '../../components/pagehero/PageHero'
import bgImg from '../../assets/1.jpg'
const Products = () => {
  return (
    <div>
      <PageHero bgimg={bgImg} pageName={"Products"}/>
    </div>
  )
}

export default Products
