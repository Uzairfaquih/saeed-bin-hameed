import React, { useEffect } from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Header from "./Header";
import TopBar from "./TopBar";
// import Crousel from "./Crousel";
import Features from "./Features";
import AboutUsMain from "./subcomponents/aboutUs/AboutUsMain";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <TopBar />
      <NavBar active="home"/>
      <Header />
      <Features />
      <AboutUsMain />
      <Footer />
    </>
  );
};

export default Home;
