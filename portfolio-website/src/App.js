import { useState } from "react";
import ProjectCard from "./Components/projectCard/ProjectCard";
import ProjectNavBar, {
   GAME_PROJECTS,
} from "./Components/projectsNavBar/ProjectNavBar";
import SocialIconsBar from "./Components/socialIconsBar/SocialIconsBar";
import ProjectDisplayContainer from "./Containers/ProjectDisplayContainer/ProjectDisplayContainer";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HeroSection from "./Layout/HeroSection/HeroSection";
import "./Stylesheets/app.scss";

import data from "./Data/ProfileData.json";

function App() {
   const [curreentProjDisplay, setCurreentProjDisplay] = useState(0);
   const displayList =
      curreentProjDisplay === 0
         ? [...data.projects.Game, ...data.projects.Websites]
         : curreentProjDisplay === 1
         ? [...data.projects.Game]
         : [...data.projects.Websites];
   console.log(displayList);
   return (
      <div>
         <Header />
         <HeroSection />
         <ProjectNavBar
            currentProjectDisplay={curreentProjDisplay}
            updateCurrentActive={setCurreentProjDisplay}
         />
         <ProjectDisplayContainer displayList={displayList} />
         <Footer />
      </div>
   );
}

export default App;
