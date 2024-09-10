import React from 'react'
import './categoriescard.css'
import {useNavigate } from 'react-router-dom'

function CategoriesCard({img,title}={...props}) {
  const navigator = useNavigate()
  const handleClick = () =>{
    if (title.toLowerCase() === "bags") {
      navigator(`/products/all`)
    }else
    navigator(`/products/${title.toLowerCase()}`)
  }

  return (
    <div className='categories-card'>
        <img src={img} alt={img} className='categories-card-image'/>
        <span className='categories-card-title'>{title}</span>
        <button className='categories-btn' onClick={handleClick}>VIEW</button>
    </div>
  )
}

export default CategoriesCard