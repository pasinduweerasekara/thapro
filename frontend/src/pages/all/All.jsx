import React, { useContext, Suspense, lazy } from "react";
import "./all.css";
import bgimg from "../../assets/3.jpg";
import { ProductContext } from "../../context/ProductsProvider";
import Spinner from "../../components/spinner/Spinner";
import Sorter from "../../components/sorter/Sorter";
import { ScrollRestoration } from "react-router-dom";

// Lazy load components
const PageHero = lazy(() => import("../../components/pagehero/PageHero"));
const PageContent = lazy(() =>
  import("../../components/pagecontent/PageContent")
);

const All = () => {
  const products = useContext(ProductContext);

  return (
    <div>
      <Suspense fallback={<Spinner/>}>
      <Sorter/>
      <PageContent products={products} title="All" />
      </Suspense>
    </div>
  );
};

export default All;
