// fetchProducts.js

export const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      
      const products = await response.json();
      return products; // Return the fetched products
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return []; // Return an empty array if there's an error
    }
  };
  