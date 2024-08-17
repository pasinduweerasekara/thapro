import PageHero from '../../components/pagehero/PageHero'
import './about.css'
import bgImg from '../../assets/3.jpg'
import React from 'react'

const About = () => {
  return (
    <div>
      <PageHero bgimg={bgImg} pageName={"About"}/>
    </div>
  )
}

export default About