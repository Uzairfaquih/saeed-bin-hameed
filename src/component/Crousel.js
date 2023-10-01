import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Crousel=()=>{
    return (
        <Carousel>
            <div>
                <img src="img/interior.jpg" alt="Saeed Bin Hameed"/>
                {/* <p className="legend"></p> */}
            </div>
            <div>
                <img src="img/interior1.jpg" alt="Saeed Bin Hameed"/>
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="img/interior2.jpg"alt="Saeed Bin Hameed"/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );

}

export default Crousel;
       