import React from "react";

import "./heroDescription.scss";

import data from "../../Data/ProfileData.json";

const HeroDescription = () => {
   return (
      <div className="hero-description-container">
         <p>
            Hi My name is Karan <span>a.k.a</span> CH3CKM473 <span>a.k.a</span>{" "}
            EyeRunnMan.
            <br />
            <br />I <span className="code">Code</span> Games 🎮 And{" "}
            <span className="website">Websites</span> 🌐
         </p>
         <div>
            <a href={data.ResumeLink}>Download Resume ⬇️</a>
         </div>
      </div>
   );
};

export default HeroDescription;
