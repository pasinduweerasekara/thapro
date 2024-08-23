import PageHero from '../../components/pagehero/PageHero'
import './belts.css'
import bgImg from '../../assets/belts.jpg'
import React, { useContext } from 'react'
import PageContent from '../../components/pagecontent/PageContent'
import { ProductContext } from '../../context/ProductsProvider'

const Belts = () => {
  const products = useContext(ProductContext)
  return (
    <div id="belts-container">
      <PageHero bgimg={bgImg} pageName={"Belts"}/>
      <PageContent products={products}/>
    </div>
  )
}

export default Belts
