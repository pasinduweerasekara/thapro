import './belts.css'
import React, { useContext } from 'react'
import PageContent from '../../components/pagecontent/PageContent'
import { ProductContext } from '../../context/ProductsProvider'

const Belts = () => {
  const products = useContext(ProductContext)
  return (
    <div id="belts-container">
      <PageContent products={products} title="Belts"/>
    </div>
  )
}

export default Belts
