import React from "react";
import AboutUsMain from "./subcomponents/aboutUs/AboutUsMain";
import AboutUsTop from "./subcomponents/aboutUs/AboutUsTop";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Features from "./Features";
import Footer from "./Footer";
import Team from "./Team";

const AboutUs = () => {
  return (<>
    <TopBar/>
    <NavBar active="about"/>
    <AboutUsTop/>
    <Features/>
    <AboutUsMain/>
    <Team/>
    <Footer/>
  </>
  );
};

export default AboutUs;
