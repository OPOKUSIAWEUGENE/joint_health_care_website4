// import styles from "../layout.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../resources/images/img1.webp"
import img2 from "../../resources/images/img2.webp"
import img3 from "../../resources/images/img3.webp"
import img4 from "../../resources/images/img4.webp"
import Electricity from "../Headercomponents/electricity";


// import { Carousel } from 'react-responsive-carousel';
import Carousels from "./Carousel/Carousel";
import Carouselcontent from "./Carousel/Carouselcontent";

export default function Slider(){

    const styles=(image)=>({    
        backgroundImage: `linear-gradient( rgba(24, 24, 25, 0.3), rgba(24, 24, 24, 0.3)),url(${image}`,
      //  backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:"100%",
        width:"100%",  
        
      })

    return(
        <Carousels   >
             <div className="background" style={styles(img1)}>
            <Carouselcontent title={"GUARANTEED ELECTRICAL SOLUTIONS"} button={"contact us"} icon={<Electricity height={50} width={50} fill={"rgba(252, 208, 194, 0.3)"} />} >
                    
            </Carouselcontent>    
        </div>
        <div className="background" style={styles(img2)}>
            <Carouselcontent title={"INDUSTRIAL SERVICES"} button={"contact us"} icon={<Electricity height={50} width={50} fill={"rgba(252, 208, 194, 0.3)"} />}>
                <span>Satchet water machine set up and installations, Gas & Diesel boiler maintenance</span>       
            </Carouselcontent>    
        </div>
        <div   style={styles(img3)}>
        <Carouselcontent title={"COMMERCIAL SERVICES"} button={"contact us"} icon={<Electricity height={50} width={50} fill={"rgba(252, 208, 194, 0.3)"} />}>
                <span>Street light installations, generator mentainance, general electrical supplies</span>
            </Carouselcontent>
              </div>
        <div   style={styles(img4)}>
        <Carouselcontent title={"RESIDENTIAL SERVICES"} button={"contact us"} icon={<Electricity height={50} width={50} fill={"rgba(252, 208, 194, 0.3)"} />}>
                <span>Home automation, electrical wiring installation, electrical design</span>
            </Carouselcontent>
                  </div>
      
    </Carousels>
    )
}

