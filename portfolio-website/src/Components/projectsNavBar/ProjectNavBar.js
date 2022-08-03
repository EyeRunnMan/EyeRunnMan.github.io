import React, { useState } from "react";

import "./ProjectNavBar.scss";
function ProjectNavItem({ name, isActive = false, onClick }) {
   return (
      <li className={isActive ? "active" : ""} onClick={onClick}>
         {name}
      </li>
   );
}

export const ALL_PROJECTS = "all-projectDisp";
export const GAME_PROJECTS = "game-projDisp";
export const WEB_PROJECTS = "web-projDisp";

function ProjectNavBar({
   currentProjectDisplay = 0,
   updateCurrentActive = () => {},
}) {
   const displayTypes = ["All", "Game Dev 👾", "Web Dev 💻"];

   return (
      <div className="project-nav-bar-container">
         <span>Projects</span>
         <ul>
            {displayTypes.map((val, idx) => {
               if (idx === currentProjectDisplay) {
                  return (
                     <ProjectNavItem
                        name={val}
                        isActive={true}
                        onClick={() => {
                           updateCurrentActive(idx);
                        }}
                     />
                  );
               } else
                  return (
                     <ProjectNavItem
                        name={val}
                        onClick={() => {
                           updateCurrentActive(idx);
                        }}
                     />
                  );
            })}
         </ul>
      </div>
   );
}

export default ProjectNavBar;
