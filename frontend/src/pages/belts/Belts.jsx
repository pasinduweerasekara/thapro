import './belts.css'
import React, {useEffect, useState } from 'react'
import PageContent from '../../components/pagecontent/PageContent'
import { fetchProducts } from '../../helpers/fetchProducts'
import { useLocation } from 'react-router-dom'

const Belts = () => {
  const [productsSet, setProductsSet] = useState([]);
  const location = useLocation()
  const apiUrl = `http://localhost:3000/api${location.pathname}`
  useEffect(() => {
    const provideData = async () => {
      const products = await fetchProducts(apiUrl); // Pass the URL as an argument
      setProductsSet(products); // Update the state with fetched products
    };

    provideData(); // Fetch products when the component mounts
  }, [apiUrl])
  return (
    <div id="belts-container">
      <PageContent products={productsSet} title="Belts"/>
    </div>
  )
}

export default Belts
