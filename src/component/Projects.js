import React, { useEffect } from "react";


import  ProjectMain  from "./subcomponents/project/ProjectMain";
import Footer from "./Footer";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import ProjectTop from "./subcomponents/project/ProjectTop";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

return (<>
  <TopBar/>
  <NavBar active="project"/>
  <ProjectTop/>
  <ProjectMain/>
  <Footer/>
  </>
  );
};

export default Projects;
