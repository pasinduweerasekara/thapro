import './wallets.css'
import bgImg from '../../assets/wallets.jpg'
import React from 'react'
import PageHero from '../../components/pagehero/PageHero'

const Wallets = () => {
  return (
    <div id="wallets-container">
      <PageHero bgimg={bgImg} pageName={"Wallets"}/>
    </div>
  )
}

export default Wallets
