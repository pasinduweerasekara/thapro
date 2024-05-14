import React, { useState, useEffect } from 'react';
import './productgallery.css'; // Import your CSS file if needed
import ProductCard from '../productcard/productcard';

const ProductGallery = ({ productsSet }) => {
  const [currentFeature, setCurrentFeature] = useState('all');
  const [products, setProducts] = useState([]);
  const [selectedBtn,setSelectedBtn] = useState("all")

  useEffect(() => {
    setProducts(productsSet);
  }, [productsSet]);


//   console.log(products);

  const featureProducts = {
    'feature1': productsSet.filter(product => product.feature =='feature1'),
    'feature2': productsSet.filter(product => product.feature =='feature2'),
    'feature3': productsSet.filter(product => product.feature =='feature3'),
  };

  // Helper function to pause execution for a specified time
  const sleep = (milliSeconds) => {
    return new Promise(resolve => setTimeout(resolve, milliSeconds));
  };

  // Function to update and display products based on input array

  const handleButtonClick = (feature) => {
    if (currentFeature !== feature) {
      setCurrentFeature(feature);
      if (feature === 'all') {
        setProducts(productsSet);
      } else {
        setProducts(featureProducts[feature]);
      }
      setSelectedBtn(feature)
    }
  };

  return (
    <div id="product-container">
      <div className="product-header">Featured Products</div>
      <div className='product-gallery-btns'>
      <button onClick={() => handleButtonClick('all')} id="button1" className={selectedBtn=="all"?"product-container-btn selected":"product-container-btn"}>ALL</button>
      <button onClick={() => handleButtonClick('feature1')} id="button2" className={selectedBtn=="feature1"?"product-container-btn selected":"product-container-btn"}>FEATURE 1</button>
      <button onClick={() => handleButtonClick('feature2')} id="button3" className={selectedBtn=="feature2"?"product-container-btn selected":"product-container-btn"}>FEATURE 2</button>
      <button onClick={() => handleButtonClick('feature3')} id="button4" className={selectedBtn=="feature3"?"product-container-btn selected":"product-container-btn"}>FEATURE 3</button>
      </div>
      <div className="product-internal-container" id="internal-container-id">
        {
                (products.length!=0)?
                    products.map(product => (<ProductCard key={product.id} title={product.title} description={product.description} price={product.price} cardImg={product.cardImg}/>))
                :
                    <div  className="product show" id="">
                          <p>Empty</p>
                        </div>
        }
        
      </div>
    </div>
  );
};

export default ProductGallery;
