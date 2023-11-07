import React from "react";

const Header = () => {
  return (
    // <div classNameName="container-fluid p-0 pb-5">
    //   <div classNameName="owl-carousel header-carousel position-relative">
    //     <div classNameName="owl-carousel-item position-relative">
    //       <img classNameName="img-fluid" src="/img/carousel-1.jpg" alt="" />
    //       <div
    //         classNameName="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            
    //         style={
    //             {
    //                 background: "rgba(53, 53, 53, .7)",
    //             }
    //         }
    //       >
    //         <div classNameName="container">
    //           <div classNameName="row justify-content-center">
    //             <div classNameName="col-12 col-lg-8 text-center">
    //               <h5 classNameName="text-white text-uppercase mb-3 animated slideInDown">
    //                 Welcome To WooDY
    //               </h5>
    //               <h1 classNameName="display-3 text-white animated slideInDown mb-4">
    //                 Best Carpenter & Craftsman Services
    //               </h1>
    //               <p classNameName="fs-5 fw-medium text-white mb-4 pb-2">
    //                 Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
    //                 diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
    //                 sea elitr.
    //               </p>
    //               <a
    //                 href=""
    //                 classNameName="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
    //               >
    //                 Read More
    //               </a>
    //               <a
    //                 href=""
    //                 classNameName="btn btn-light py-md-3 px-md-5 animated slideInRight"
    //               >
    //                 Free Quote
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div classNameName="owl-carousel-item position-relative">
    //       <img classNameName="img-fluid" src="/img/carousel-2.jpg" alt="" />
    //       <div
    //         classNameName="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
    //         style={
    //             {
    //                 background: "rgba(53, 53, 53, .7)",
    //             }
    //         }
    //       >
    //         <div classNameName="container">
    //           <div classNameName="row justify-content-center">
    //             <div classNameName="col-12 col-lg-8 text-center">
    //               <h5 classNameName="text-white text-uppercase mb-3 animated slideInDown">
    //                 Welcome To WooDY
    //               </h5>
    //               <h1 classNameName="display-3 text-white animated slideInDown mb-4">
    //                 Best Carpenter & Craftsman Services
    //               </h1>
    //               <p classNameName="fs-5 fw-medium text-white mb-4 pb-2">
    //                 Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
    //                 diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
    //                 sea elitr.
    //               </p>
    //               <a
    //                 href=""
    //                 classNameName="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
    //               >
    //                 Read More
    //               </a>
    //               <a
    //                 href=""
    //                 classNameName="btn btn-light py-md-3 px-md-5 animated slideInRight"
    //               >
    //                 Free Quote
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div classNameName="owl-carousel-item position-relative">
    //       <img classNameName="img-fluid" src="/img/carousel-3.jpg" alt="" />
    //       <div
    //         classNameName="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
    //         style={
    //             {
    //                 background: "rgba(53, 53, 53, .7)",
    //             }
    //         }
    //       >
    //         <div classNameName="container">
    //           <div classNameName="row justify-content-center">
    //             <div classNameName="col-12 col-lg-8 text-center">
    //               <h5 classNameName="text-white text-uppercase mb-3 animated slideInDown">
    //                 Welcome To WooDY
    //               </h5>
    //               <h1 classNameName="display-3 text-white animated slideInDown mb-4">
    //                 Best Carpenter & Craftsman Services
    //               </h1>
    //               <p classNameName="fs-5 fw-medium text-white mb-4 pb-2">
    //                 Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
    //                 diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
    //                 sea elitr.
    //               </p>
    //               <a
    //                 href=""
    //                 classNameName="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
    //               >
    //                 Read More
    //               </a>
    //               <a
    //                 href=""
    //                 classNameName="btn btn-light py-md-3 px-md-5 animated slideInRight"
    //               >
    //                 Free Quote
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src="img/interior6.jpg" className="d-block w-100" alt="Saeed Bin Hameed"/>
        <div className="carousel-caption d-none d-md-block">
          <h1>Exclusively Finishing work</h1>
          {/* <p>Some representative placeholder content for the first slide.</p> */}
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="img/interior3.jpg" className="d-block w-100" alt="Saeed Bin Hameed"/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Exclusively Finishing work</h1>

        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="img/interior4.jpg" className="d-block w-100" alt="Saeed Bin Hameed"/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Exclusively Finishing work</h1>

        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Header;
