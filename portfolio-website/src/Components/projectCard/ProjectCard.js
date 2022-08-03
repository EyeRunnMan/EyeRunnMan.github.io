import React from "react";
import "../projectsNavBar/ProjectNavBar";

import "./projectCard.scss";

import playIcon from "../../assets/images/playVideo.svg";

function ProjectCard({
   isImg = true,
   cardName = "test",
   mediaLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXq_P8B3AlzaZpuPks1QGG4buon00FJrI0o_Lb-Noie6Hu-yKUmStSKZBfphSUefu_30&usqp=CAU",
   codeLink = "",
   liveLink = "",
   isWeb = false,
}) {
   const webClass = isWeb ? "web-card" : "";
   return (
      <div className={"project-card-single " + webClass}>
         {isImg ? (
            <img src={mediaLink} alt={cardName} />
         ) : (
            <video
               src={mediaLink}
               onMouseEnter={(event) => event.target.play()}
               onMouseLeave={(event) => event.target.pause()}
            />
         )}
         {isImg ? (
            <></>
         ) : (
            <img
               src={playIcon}
               alt="hover to play"
               className="play-video-icon"
            />
         )}
         <span>{cardName}</span>

         {codeLink ? <a href={codeLink}>Code</a> : <></>}
         {liveLink ? <a href={liveLink}>Live</a> : <></>}
      </div>
   );
}

export default ProjectCard;

//{isImg ? <img /> : <video />}
