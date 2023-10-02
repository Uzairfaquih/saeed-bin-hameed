import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Crousel=()=>{
    const corImg = {
        
    }
    return (
        <Carousel>
            <div>
                <img src="img/interior.jpg" alt="Saeed Bin Hameed" style={corImg}/>
                {/* <p className="legend"></p> */}
            </div>
            <div>
                <img src="img/interior3.jpg" alt="Saeed Bin Hameed"/>
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="img/interior4.jpg"alt="Saeed Bin Hameed"/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );

}

export default Crousel;
       