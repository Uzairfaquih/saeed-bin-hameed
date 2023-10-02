import React from 'react'
import CompanyMain from "./subcomponents/company/CompanyMain";
import CompanyHeader from "./subcomponents/company/CompanyHeader";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CompanyProfile = () => {
  return (
    <>
     <TopBar/>
    <NavBar active="company-profile"/>
      <CompanyHeader />
      <CompanyMain />
      <Footer/>
    </>
  )
}

export default CompanyProfile