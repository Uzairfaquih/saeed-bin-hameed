import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const today = new Date();

// Extract year, month, and day
const year = today.getFullYear();
  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5 justify-content-around">
          <div className="col-lg-4 col-md-6 ">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2" >
              <i className="fa fa-map-marker-alt me-3"></i>{" "}
              SBC, 7953, Advance Business
            </p>
            <p>
            Center Building , Jeddah, Saudi Arabia
            </p>
          
            <p className="mb-2 me-3">
              <i className="fa fa-phone-alt me-3"></i>+966 12 2121234
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@s-b-c.co
            </p>
            {/* <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
            <Link to="/service" className="btn btn-link" href="">
            GYPSUM AND CEILING TILES WORKS
            </Link>
            <Link to="/service" className="btn btn-link" href="">
            MARBLE AND CERAMIC TILES
            </Link>
            <Link to="/service" className="btn btn-link" href="">
            PAINTING WORKS
            </Link>
            <Link to="/service" className="btn btn-link" href="">
            WOOD WORKS

            </Link>
          
            {/* <a className="btn btn-link" href="">
              Custom Carpentry
            </a> */}
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <Link to="/about-us" className="btn btn-link">
              About
            </Link>

            <Link to="/contact" className="btn btn-link">
              Contact Us
            </Link>
          
            <Link to="/company-profile" className="btn btn-link">
              Company Profile
            </Link>
            {/*           
            <a className="btn btn-link" href="">
              Our Services
            </a> */}
          
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
               {year}  , All Right Reserved. Saeed Bin Hameed Al-Beladi Company
              </a>
             
            </div>
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              {/* &copy;{" "} */}
              <a className="border-bottom " href="#">
              Developed by Uzair Faquih
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
