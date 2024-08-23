import React, { useContext } from 'react'
import './forher.css'
import PageHero from '../../components/pagehero/PageHero'
import bgImg from '../../assets/5.jpg'
import PageContent from '../../components/pagecontent/PageContent'
import { ProductContext } from '../../context/ProductsProvider'
const ForHer = () => {
  const products = useContext(ProductContext)
  return (
    <div>
      <PageHero bgimg={bgImg} pageName={"For Her"}/>
      <PageContent products={products}/>
    </div>
  )
}

export default ForHer
