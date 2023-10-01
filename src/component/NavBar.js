import React from "react";
import { Link } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img
            src="/img/Al-Beladi-Logo.jpg"
            className="img-logo"
            alt="Saeed Bin hameed"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>

            <Link to="/about-us" className="nav-item nav-link ">
              About
            </Link>

            {/* <Link to="/services" className="nav-item nav-link ">
              Service
            </Link> */}

            <Link to="/project" className="nav-item nav-link ">
              Project
            </Link>
          
            <Link to="/service" className="nav-item nav-link ">
              Services
            </Link>

            <Link to="/contact" className="nav-item nav-link ">
              Contact
            </Link>
           
            <LanguageDropdown/>

          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
