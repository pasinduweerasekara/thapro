import React from 'react'
import './pagehero.css'

const PageHero = ({bgimg,pageName}) => {
  return (
    <section id="page-hero-container">
      <div id="page-hero-background">
        <img src={bgimg} alt={bgimg}  id="page-hero-background-img" />
      </div>
      <div id="page-hero-content">
        <div id="page-hero-content-section1">
            <div id="page-hero-text">
            <span className="page-hero-main-text" id="page-hero-main-text-name">/{pageName}</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
