import React, { createContext, useEffect, useState } from "react";

// Create the context for products
export const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  // Use state to manage the products
  const [productsSet, setProductsSet] = useState([]);

  // Function to fetch product data
  const provideData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products/all");
      
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      
      const products = await response.json();
      setProductsSet(products); // Update the state with fetched products
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  // Use useEffect to call the data fetching when the component mounts
  useEffect(() => {
    provideData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <ProductContext.Provider value={productsSet}>
      {children}
    </ProductContext.Provider>
  );
};
