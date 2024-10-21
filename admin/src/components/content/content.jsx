import { useEffect } from 'react';
import AdminProductTable from '../adminproducttable/adminProductTable';
import './content.css'

import React from 'react'
import { fetchProducts } from '../../../../frontend/src/helpers/fetchProducts';
import { useState } from 'react';

const Content = () => {
    const [productsSet,setProductsSet] = useState([])

    useEffect(() => {
        const provideData = async () => {
          try {
            const products = await fetchProducts('http://localhost:3000/api/products/all');
            setProductsSet(products);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        provideData();
      }, []); // Runs once on mount

  return (
    <div id="content-container">
      <AdminProductTable products={productsSet}/>
    </div>
  )
}

export default Content
