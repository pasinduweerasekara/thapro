import PageHero from '../../components/pagehero/PageHero'
import './accessories.css'
import bgImg from '../../assets/2.jpg'
import React, { useContext } from 'react'
import PageContent from '../../components/pagecontent/PageContent'
import { ProductContext } from '../../context/ProductsProvider'

const Accessories = () => {
  const products = useContext(ProductContext)
  return (
    <div>
      <PageHero bgimg={bgImg} pageName={"Accessories"}/>
      <PageContent products={products}/>
    </div>
  )
}

export default Accessories
