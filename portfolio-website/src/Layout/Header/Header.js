import React from "react";

import "./header.scss";

import "../../Components/websiteTitle/WebsiteTitle";
import WebsiteTitle from "../../Components/websiteTitle/WebsiteTitle";
import SocialIconsBar from "../../Components/socialIconsBar/SocialIconsBar";

function Header() {
   return (
      <div className="app-header">
         <WebsiteTitle />
         <SocialIconsBar />
      </div>
   );
}

export default Header;
