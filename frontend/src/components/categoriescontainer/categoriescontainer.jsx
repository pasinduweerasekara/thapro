import React from 'react'
import './categoriescontainer.css'
import CategoriesCard from '../categoriescard/categoriescard'

import cardImg1 from '../../assets/1.jpg'
import cardImg2 from '../../assets/2.jpg'
import cardImg3 from '../../assets/3.jpg'

function CategoriesContainer() {
  return (
    <div id="categories-container">
        <h1 id="categories-container-heading">Categories</h1>
    <div id='categories-inner-container'>
            <CategoriesCard img={cardImg1} title={"Wallets"}/>
            <CategoriesCard img={cardImg2} title={"Bags"}/>
            <CategoriesCard img={cardImg3} title={"Accessories"}/>
            <CategoriesCard img={cardImg2} title={"Bags"}/>
            <CategoriesCard img={cardImg3} title={"Accessories"}/>
            <CategoriesCard img={cardImg1} title={"Wallets"}/>
    </div>
    </div>
  )
}

export default CategoriesContainer