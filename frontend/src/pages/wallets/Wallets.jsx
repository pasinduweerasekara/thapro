import './wallets.css'
import bgImg from '../../assets/wallets.jpg'
import React, { useContext } from 'react'
import PageHero from '../../components/pagehero/PageHero'
import PageContent from '../../components/pagecontent/PageContent'
import { ProductContext } from '../../context/ProductsProvider'

const Wallets = () => {
  const products = useContext(ProductContext)
  return (
    <div id="wallets-container">
      <PageContent products={products} title="Wallets"/>
    </div>
  )
}

export default Wallets
