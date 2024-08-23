import React, { useContext } from 'react'
import PageHero from '../../components/pagehero/PageHero'
import './all.css'
import bgimg from '../../assets/3.jpg'
import { ProductContext } from '../../context/ProductsProvider'
import PageContent from '../../components/pagecontent/PageContent'
const All = () => {
    const products = useContext(ProductContext)
  return (
    <div>
      <PageHero bgimg={bgimg} pageName={"All"}/>
      <PageContent products={products}/>
    </div>
  )
}

export default All
