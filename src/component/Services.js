import React, { useEffect } from "react";

import ServiceHeader from "./subcomponents/service/ServiceHeader";
import ServiceMain from "./subcomponents/service/ServiceMain";
import TopBar from "./TopBar";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
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
