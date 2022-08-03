import React from "react";

import "./socialIconsBar.scss";

import data from "../../Data/ProfileData.json";

function SocialIconsBar() {
   return (
      <div className="social-icons">
         <a href={data.social.discord}>
            <i className="discord" />
         </a>
         <a href={data.social.instagram}>
            <i className="instagram" />
         </a>
         <a href={data.social.github}>
            <i className="github" />
         </a>
         <a href={data.social.mail}>
            <i className="mail" />
         </a>
         <a href={data.social.linkedin}>
            <i className="linkedin" />
         </a>
      </div>
   );
}

export default SocialIconsBar;
