import React, { useEffect } from "react";
import ContactMain from "./subcomponents/contact/ContactMain";
import ContactTop from "./subcomponents/contact/ContactTop";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
    <TopBar/>
    <NavBar active="contact"/>
      <ContactTop />
      <ContactMain />
      <Footer/>
    </>
  );
};

export default ContactUs;
