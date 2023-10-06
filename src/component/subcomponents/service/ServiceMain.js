
import MyModal from "../project/MyModal";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ServiceMain = () => {

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
                <img className="img-fluid w-100" src="img/gypsum1.jpg" alt="Saeed Bin Hameed"/>
                <div className="portfolio-overlay">
                <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("gypsum2.jpg","gypsum3.jpg","gypsum4.jpg")}>
                  <i className="fa fa-eye"></i>

      </Button>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4" style={{ height: "120px" }}>
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">GYPSUM AND
CEILING TILE
WORKS</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/marble1.jpg" alt="Saeed Bin Hameed"/>
                <div className="portfolio-overlay">
                <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("marble2.jpg","marble3.jpg","marble4.jpg")}>
                  <i className="fa fa-eye"></i>

      </Button>
                  
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">MARBLE AND CEILING TILE WORK</h5>
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
                  src="img/painting1.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("painting2.jpg","painting3.jpg","painting4.jpg")}>
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
                PAINTING WORKS
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/wood-work1.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                  {/* <a className="btn btn-square btn-outline-light mx-1" href="img/wood-work14.jpg" data-lightbox="portfolio">
                  </a> */}
                  <Button className="btn btn-square btn-outline-light mx-1" variant="" onClick={()=>handleShow("wood-work2.jpg","wood-work3.jpg","wood-work4.jpg")}>
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
                <h5 className="lh-base mb-0">WOOD WORKS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ServiceMain;
