import React from "react";
import ContactMain from "./subcomponents/contact/ContactMain";
import ContactTop from "./subcomponents/contact/ContactTop";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
      <ContactTop />
      <ContactMain />
      <Footer/>
    </>
  );
};

export default ContactUs;
