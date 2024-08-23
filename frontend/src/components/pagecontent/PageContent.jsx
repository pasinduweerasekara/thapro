import React from 'react'
import ProductGallery from '../productgallery/productgallery'
import Filter from '../filter/Filter'

const PageContent = ({products}) => {
  return (
    <div id='content'>
      <Filter/>
      <ProductGallery productsSet={products}/>
      </div>
  )
}

export default PageContent
