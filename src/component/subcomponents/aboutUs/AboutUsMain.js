import React from "react";

const AboutUsMain = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-4 ps-lg-0" style={{ minHeight: "300px" }}>
            <div className="position-relative h-50">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="img/carousel-6.jpg"
                style={{ objectFit: "fill" }}
                alt=""
              />
            </div>
            <div className="position-relative h-50">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="img/carousel-5.jpg"
                style={{ objectFit: "fill" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">About Us</h1>
              </div>
              <p className="mb-4 pb-2 text-justify">
                Saeed Bin Hamed Al Beladi Co. (SBC) for Finishing Work excels in
                delivering unparalleled craftsmanship across a spectrum of
                services. Our expertise extends to the meticulous creation of
                Fibrous Gypsum Decorative Panels, Gypsum Boards, Dry Lining, GRC
                (Glass Reinforced Concrete), Acoustic Ceiling Tiles, Painting
                work, Flooring work, and Wood works.
              </p>
              <p className="mb-4 pb-2 text-justify">
                SAEED BIN HAMED AL BELADI Co. Has a core team of highly skilled
                technicians and workforce with an average of over (15) years of
                experience in finishing work in Saudi Arabia and they are
                composed of Arab, Asian and African. From 2022 to 2023 SAEED BIN
                HAMED AL BELADI Co. For the finishing works carried out in a
                shorter time projects in Jeddah: Turkey Al Harby Ubhur, Tayba
                Market Al Bawadi, Saeed Al Ghreb Villa - Al Amer Fawaz and in
                Riyadh: Al Subaie-Villa. This work was carried out thanks to its
                qualified and experienced teams in finishing work and with the
                service satisfaction defined by each customer.
              </p>
              <p className="mb-4 pb-2 text-justify">
                We are committed to making our customers more satisfied given
                market competition, management routinely adapts to the latest
                market trends and professionally improves its approach to
                quality service, deadline commitments and customer relations. At
                the core of our operations, we uphold a commitment to
                excellence. Our dedicated team not only possesses a wealth of
                skills and experience but is also equipped with state-of-the-art
                tools, a diverse array of shops, a fleet of well-maintained
                vehicles, and cutting-edge equipment. This comprehensive
                infrastructure ensures that we are well-prepared to undertake
                and successfully complete projects of varying scales.
              </p>
              <div className="row g-4 mb-4 pb-2">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-users fa-2x text-primary"></i>
                    </div>
                    <div className="ms-3">
                      <h2
                        className="text-primary mb-1"
                        data-toggle="counter-up"
                      >
                        1234
                      </h2>
                      <p className="fw-medium mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-check fa-2x text-primary"></i>
                    </div>
                    <div className="ms-3">
                      <h2
                        className="text-primary mb-1"
                        data-toggle="counter-up"
                      >
                        1234
                      </h2>
                      <p className="fw-medium mb-0">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a href="" className="btn btn-primary py-3 px-5">
                Explore More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
