import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import Header from "./Header";
import TopBar from "./TopBar";
import Crousel from "./Crousel";
import Features from "./Features";
import AboutUsMain from "./subcomponents/aboutUs/AboutUsMain";
import  ProjectMain  from "./subcomponents/project/ProjectMain";

const Home = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Crousel />
      {/* <Header /> */}
      <Features />
      <AboutUsMain />
      <ProjectMain />
      <Footer />
    </>
  );
};

export default Home;
