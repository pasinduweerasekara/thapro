// fetchProducts.js

export const fetchProducts = async (url='',skip=0,limit=-0) => {

  const fullUrl = new URL(url); // Create a URL object

  // Append query parameters
  fullUrl.searchParams.append('skip', skip);
  fullUrl.searchParams.append('limit', limit);
    try {
      let response = await fetch(fullUrl);
      
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      
      response = await response.json();
      
      return response; // Return the fetched products
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return []; // Return an empty array if there's an error
    }
  };
  