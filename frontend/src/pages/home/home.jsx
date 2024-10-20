import React, { Suspense, useEffect, useState } from 'react';
import './home.css';

import Hero from '../../components/hero/hero';
import ProductGallery from '../../components/productgallery/productgallery';
import CategoriesContainer from '../../components/categoriescontainer/categoriescontainer';
import FeaturedProduct from '../../components/featuredproduct/featuredproduct';
import { fetchProducts } from '../../helpers/fetchProducts';

function Home() {
  const [productsSet, setProductsSet] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState({});

  useEffect(() => {
    const provideData = async () => {
      try {
        const products = await fetchProducts('http://localhost:3000/api/products/all', 0, 4);
        setProductsSet(products);

        const currentFeaturedProduct = await fetchProducts('http://localhost:3000/api/products/featured');
        if (currentFeaturedProduct) {
          setFeaturedProduct(currentFeaturedProduct);
        } else {
          console.warn("No featured product found!");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    provideData();
  }, []); // Runs once on mount

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        {featuredProduct.images && (<>
          <h1 className="heading">Featured</h1>
          <FeaturedProduct
            category={featuredProduct.category}
            slug={featuredProduct.slug}
            image={featuredProduct.images[0]}
            price={featuredProduct.price}
            title={featuredProduct.name}
            description={featuredProduct.description}
            promotion={"25% off"}
          />
        </>)}
        {/* <span className="devider"></span> */}
        <h1 className="heading">Latest Products</h1>
        <ProductGallery productsSet={productsSet} />
        <CategoriesContainer />
      </Suspense>
    </>
  );
}

export default Home;
