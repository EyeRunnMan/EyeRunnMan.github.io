import React from "react";

import "./heroSection.scss";

import "../../Components/heroAvatar/HeroAvatar";
import HeroAvatar from "../../Components/heroAvatar/HeroAvatar";
import HeroDescription from "../../Components/heroDescription/HeroDescription";

function HeroSection() {
   return (
      <div className="hero-section">
         <HeroAvatar />
         <HeroDescription />
      </div>
   );
}

export default HeroSection;
