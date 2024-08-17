import PageHero from '../../components/pagehero/PageHero'
import './belts.css'
import bgImg from '../../assets/belts.jpg'
import React from 'react'

const Belts = () => {
  return (
    <div id="belts-container">
      <PageHero bgimg={bgImg} pageName={"Belts"}/>
    </div>
  )
}

export default Belts
