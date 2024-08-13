import React from 'react'
import './categoriescard.css'

function CategoriesCard({img,title}={...props}) {
  return (
    <div className='categories-card'>
        <img src={img} alt={img} className='categories-card-image'/>
        <span className='categories-card-title'>{title}</span>
        <button className='categories-btn'>VIEW</button>
    </div>
  )
}

export default CategoriesCard