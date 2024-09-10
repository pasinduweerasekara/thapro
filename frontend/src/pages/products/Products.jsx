import React, { Suspense, lazy } from 'react'
import './products.css'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner';
import All from '../all/All';

// Lazy load the components
const Filter = lazy(() => import('../../components/filter/Filter'));
const PageHero = lazy(() => import('../../components/pagehero/PageHero'));
const Products = () => {
  const location = useLocation()
  return (
    <div>
      <ScrollRestoration />
      <Suspense fallback={<Spinner/>}>
      </Suspense>
      <div id="page-content">
        <Suspense fallback={<Spinner/>}>
          <Filter />
          {
            location.pathname === "/products" ? <All/>:""
          }
        </Suspense>
        <Outlet />
      </div>
    </div>
  )
}

export default Products
