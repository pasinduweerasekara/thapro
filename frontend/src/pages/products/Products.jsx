import React, { Suspense, lazy } from 'react'
import './products.css'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner';

// Lazy load the components
const Filter = lazy(() => import('../../components/filter/Filter'));
const PageHero = lazy(() => import('../../components/pagehero/PageHero'));

const Products = () => {
  return (
    <div>
      <ScrollRestoration />
      <Suspense fallback={<Spinner/>}>
      </Suspense>
      <div id="page-content">
        <Suspense fallback={<Spinner/>}>
          <Filter />
        </Suspense>
        <Outlet />
      </div>
    </div>
  )
}

export default Products
