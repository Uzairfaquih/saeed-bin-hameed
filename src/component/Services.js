import React from "react";
import ServiceHeader from "./subcomponents/service/ServiceHeader";
import ServiceMain from "./subcomponents/service/ServiceMain";
import TopBar from "./TopBar";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Services = () => {
  return (
    <>
      <TopBar />
      <NavBar active="service"/>
      <ServiceHeader />
      <ServiceMain />
      <Footer />
    </>
  );
};

export default Services;
