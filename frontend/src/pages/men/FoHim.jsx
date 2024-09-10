import PageHero from '../../components/pagehero/PageHero'
import './forhim.css'
import bgImg from '../../assets/4.jpg'
import React, { useContext } from 'react'
import PageContent from '../../components/pagecontent/PageContent'
import { ProductContext } from '../../context/ProductsProvider'

const FoHim = () => {
  const products = useContext(ProductContext)
  return (
    <div>
    <PageContent products={products} title="Men"/>
    </div>
  )
}

export default FoHim
