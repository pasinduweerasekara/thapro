import React, {Suspense, lazy, useState, useEffect } from "react";
import "./all.css";
import Spinner from "../../components/spinner/Spinner";
import Sorter from "../../components/sorter/Sorter";
import { fetchProducts } from "../../helpers/fetchProducts";
import { useLocation } from "react-router-dom";

// Lazy load components
const PageHero = lazy(() => import("../../components/pagehero/PageHero"));
const PageContent = lazy(() =>
  import("../../components/pagecontent/PageContent")
);

const All = () => {
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
    <div>
      <Suspense fallback={<Spinner/>}>
      <Sorter/>
      <PageContent products={productsSet} title="All" />
      </Suspense>
    </div>
  );
};

export default All;
