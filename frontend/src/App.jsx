import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import ProductGallery from './components/productgallery/productgalley';
import cardImg1 from '../src/assets/1.jpg'
import cardImg2 from '../src/assets/2.jpg'
import cardImg3 from '../src/assets/3.jpg'
import cardImg4 from '../src/assets/4.jpg'
import cardImg5 from '../src/assets/5.png'

function App() {

  const productsSet = [
    { id: 'product1', feature: 'feature1', title: 'Product 1 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg1 },
    { id: 'product2', feature: 'feature3', title: 'Product 2 f3', description:"This the the descriotion if product 1", price:6250, cardImg:cardImg2},
    { id: 'product3', feature: 'feature2', title: 'Product 3 f2', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg3},
    { id: 'product4', feature: 'feature3', title: 'Product 4 f3', description:"This the the descriotion if product 1", price:3200, cardImg:cardImg1},
    { id: 'product5', feature: 'feature1', title: 'Produt  5 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg5},
    { id: 'product6', feature: 'feature1', title: 'Product 1 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg2},
    { id: 'product7', feature: 'feature3', title: 'Product 2 f3', description:"This the the descriotion if product 1", price:6250, cardImg:cardImg4},
    { id: 'product8', feature: 'feature2', title: 'Product 3 f2', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg2},
    { id: 'product9', feature: 'feature3', title: 'Product 4 f3', description:"This the the descriotion if product 1", price:3200, cardImg:cardImg5},
    { id: 'product10', feature: 'feature1', title: 'Produt  5 f1', description:"This the the descriotion if product 1", price:4500, cardImg:cardImg3},
  ];

  return (
    <>
    <Navbar/>
    <Hero/>
    <ProductGallery productsSet={productsSet} />
    </>
  )
}

export default App
