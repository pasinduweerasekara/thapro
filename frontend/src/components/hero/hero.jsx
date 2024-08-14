import React from "react";
import "./hero.css";
import bgimg from "../../assets/background.jpg";
import TypingComponent from "../typingcomponent/typingcomponent";
import heroImg from '../../assets/heroimg.jpg'

function Hero() {
  return (
    <section id="hero-container">
      <div id="hero-background">
        <img src={bgimg} alt={bgimg}  id="hero-background-img" />
      </div>
      <div id="hero-content">
        <div id="hero-content-section1">
            <div id="hero-text">
            <span className="hero-main-text" id="hero-main-text-name">THAPRO,</span>
            <div>
            <TypingComponent
          clasName="hero-main-text"
            id={"hero-main-text-typing"}
            phrases={[
              "Crafted Elegance: Where Leather Meets Artistry",
              "Unleashing Style, One Stitch at a Time: Your Leather Adventure Awaits!"
            ]}
            loop={true}
            typingSpeed={100}
            pause={1000}
            deletingSpeed={20}
          />
            </div>
          
            </div>
          <span id="hero-btn">SHOP</span>
        </div>
        {/* <div id="hero-content-section2">
            <div id="hero-img-container"><img src={heroImg} alt={heroImg} id="hero-img" /></div>
            
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
