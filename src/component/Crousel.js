import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Crousel=()=>{
    return (
        <Carousel>
            <div>
                <img src="img/interior.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="img/interior1.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="img/interior2.jpg"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );

}

export default Crousel;
       