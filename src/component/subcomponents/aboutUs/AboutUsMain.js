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
                src="img/carousel-7.jpg"
                style={{ objectFit: "fill" }}
                alt=""
              />
            </div>
            <div className="position-relative h-50">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="img/carousel-8.jpg"
                style={{ objectFit: "fill" }}
                alt=""
              />
            </div>
          </div>
          <div
            className="col-lg-8 about-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">About Us</h1>
              </div>
              <p className="mb-4 pb-2 text-justify">
                <strong>Saeed Bin Hamed Al Beladi Co. (SBC)</strong> for finishing works excels
                in providing unparalleled craftsmanship through a range of
                services. Our expertise extends to the meticulous realization of
                decorative fibrous gypsum boards, plasterboard, dry cladding,
                acoustic ceiling tiles, painting, flooring, wall and carpentry.
              </p>
              <p className="mb-4 pb-2 text-justify">
                <strong> SAEED BIN HAMED AL BELADI Co.</strong> has a core team of highly skilled
                technicians and manpower with key personnel with more than (15)
                years of experience in finishing work in Saudi Arabia and they
                are composed of Arabs, Asians and Africans.
              </p>
              <p className="mb-4 pb-2 text-justify">
                From 2022 to 2023, <strong>SAEED BIN HAMED AL BELADI Co.</strong> carried out
                work under shorter deadlines on projects in Jeddah: Turkey Al
                Harby Ubhur, Tayba Market Al Bawadi, Saeed Al Ghreb Villa - Al
                Amer Fawaz and in Riyadh: Al Subaie- Villa.
              </p>
              <p className="mb-4 pb-2 text-justify">
                We guarantee you high quality projects, competitive prices and
                distinguished timing. Our management regularly adapts to the
                latest market trends and professionally improves its approach to
                quality service, on-time commitments. At the heart of our
                operations, we maintain a commitment to excellence. Our
                dedicated team not only has a wealth of skills and experience,
                but is also equipped with state-of-the-art tools, a diverse
                range, a fleet of well-maintained vehicles. This comprehensive
                infrastructure ensures that we are well prepared to undertake
                and deliver projects of various sizes.
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
                        4
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
                        4
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
