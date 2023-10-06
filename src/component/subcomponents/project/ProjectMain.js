
import MyModal from "./MyModal";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ProjectMain = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageUrl1, setImageUrl1] = useState(false);
  const [imageUrl2, setImageUrl2] = useState(false);
  const [imageUrl3, setImageUrl3] = useState(false);

  const handleShow = (image1,image2,image3) =>{ 
    setImageUrl1(image1);
    setImageUrl2(image2);
    setImageUrl3(image3);
    setShowModal(true);
  }
  const handleClose = () => setShowModal(false);
  return (
    <>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Our Projects</h1>
        </div>

        <div className="row g-4 portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/project-1.jpg" alt="Saeed Bin Hameed"/>
                <div className="portfolio-overlay">
                <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("project-2.jpg","project-3.jpg","project-4.jpg")}>
                  <i className="fa fa-eye"></i>

      </Button>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4" style={{ height: "120px" }}>
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">TURKEY ALHARBY.UBHOUR -JEDDAH</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/project-5.jpg" alt="Saeed Bin Hameed"/>
                <div className="portfolio-overlay">
                <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("project-6.jpg","project-7.jpg","project-8.jpg")}>
                  <i className="fa fa-eye"></i>

      </Button>
                  
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">AL SUBAIE VILLA-RIYADH</h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/project-9.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("project-10.jpg","project-11.jpg","project-12.jpg")}>
                  <i className="fa fa-eye"></i>

      </Button>
                  
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">
                  SAEED AL GHREB VILLA <br />AMER FAWAZ-JEDDAH
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/project-13.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                  {/* <a className="btn btn-square btn-outline-light mx-1" href="img/project-14.jpg" data-lightbox="portfolio">
                  </a> */}
                  <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("project-2.jpg","project-3.jpg","project-4.jpg")}>
                  <i className="fa fa-eye"></i>

      </Button>

      <MyModal show={showModal} handleClose={handleClose} image1={imageUrl1} image2={imageUrl2} image3={imageUrl3} />
                 
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">TAYBA MARKET AL BAWADI-JEDDAH</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ProjectMain;
