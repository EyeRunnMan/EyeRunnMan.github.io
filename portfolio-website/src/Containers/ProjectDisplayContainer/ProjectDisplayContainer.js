import React from "react";

import data from "../../Data/ProfileData.json";

import "../../Components/projectCard/ProjectCard";
import ProjectCard from "../../Components/projectCard/ProjectCard";

import "./projectDisplayContainer.scss";

function ProjectDisplayContainer({ displayList }) {
   return (
      <div className="project-display-container">
         {displayList.map((val, idx) => {
            return (
               <ProjectCard
                  cardName={val.name}
                  isImg={val.isImg}
                  mediaLink={val.mediaLink}
                  codeLink={val.codeLink}
                  liveLink={val.liveLink}
                  isWeb={val.isWeb}
               />
            );
         })}
      </div>
   );
}

export default ProjectDisplayContainer;
