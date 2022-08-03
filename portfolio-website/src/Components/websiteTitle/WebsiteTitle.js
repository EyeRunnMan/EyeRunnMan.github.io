import React from "react";
import profileData from "../../Data/ProfileData.json";

import "./websiteTitle.scss";

function WebsiteTitle() {
   return (
      <div className="title-container">
         <h1 className="title-container-text">{profileData.name}</h1>
      </div>
   );
}

export default WebsiteTitle;
