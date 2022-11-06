// import styles from "../layout.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../resources/images/errands.jpg"
import img2 from "../../resources/images/housekeeping.jpg"
import img3 from "../../resources/images/reminder.jpg"
import img4 from "../../resources/images/img4.webp"
import Electricity from "../Headercomponents/electricity";
import Logo from "../../resources/dlogo.png"


// import { Carousel } from 'react-responsive-carousel';
import Carousels from "./Carousel/Carousel";
import Carouselcontent from "./Carousel/Carouselcontent";

export default function Slider(){

    const styles=(image)=>({    
        backgroundImage: `linear-gradient( rgba(24, 24, 25, 0.7), rgba(24, 24, 24, 0.7)),url(${image}`,
      //  backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:"100%",
        width:"100%",  
        
      })

    return(
        <Carousels   >
           <div className="background" style={styles(img3)}>
            <Carouselcontent  button={"contact us"} icon={Logo}>
             
             <div className="carouselContent">
                <div>
                <img src={Logo} style={{ width:400}} alt="logo"/>
                </div>
     <div className="carouselButtons">
     <a href="tel:+233245959600">   
                    <button className="contactus" >
                    <i class="fa fa-phone"></i>(832)-343-7049
               
                 </button>
                 </a> 
                 <button className="inboxus" >
                 <i class="fa fa-envelope"></i> Message Us
                </button>
                </div>   
                </div>   
            </Carouselcontent>    
        </div>
        <div className="background" style={styles(img2)}>
            <Carouselcontent  icon={Logo}>
            <div className="carouselContent">
            <div class="text b">
    <h3> Field Of Specialization</h3>
 <ul>
  <li>Medication Reminders</li>
  <li>Errands</li>
  <li>Light Housekeeping</li> 
  <li>Meal Preparation</li>
  <li>Companionship</li>
</ul>
<button className="inboxus" >
                 <i class="fa fa-envelope"></i> Message Us
                </button>

  </div>    
  </div>  
            </Carouselcontent>    
        </div>
        <div   style={styles(img1)}>
        <Carouselcontent  icon={Logo}>
        <div className="carouselContent">

        <div class="text b">
  
  <p> At D'S WORLD, <br/> We Offer Good and Quality Services</p>
  <button className="inboxus" >
                 <i class="fa fa-envelope"></i> Message Us
                </button>
  </div>
           </div>  
                 </Carouselcontent>
              </div>
     
    </Carousels>
    )
}

