import React from "react";
import "./hero.css";
import bgimg from "../../assets/4.png";
import TypingComponent from "../typingcomponent/typingcomponent";

function Hero() {
  return (
    <section id="hero-container">
      <div id="hero-background">
        <img src={bgimg} alt={bgimg}  id="hero-background-img" />
      </div>
      <div id="hero-content">
        <div id="hero-content-section1">
            <span className="hero-main-text">This is THAPRO,</span>
          <TypingComponent
          clasName="hero-main-text"
            id={"hero-main-text-typing"}
            phrases={[
              "Crafted Elegance: Where Leather Meets Artistry",
              "Unleashing Style, One Stitch at a Time: Your Leather Adventure Awaits!"
            ]}
            loop={true}
            typingSpeed={80}
            pause={1000}
            deletingSpeed={20}
          />
        </div>
        <div id="hero-content-section2">
          {" "}
        </div>
      </div>
    </section>
  );
}

export default Hero;
