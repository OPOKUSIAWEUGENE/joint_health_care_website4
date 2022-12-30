import styles from "./layout.module.css"
import Slider from "./Maincontentcomponents/Slider.js"
import Row from "./Maincontentcomponents/Row"
// import Rowcard from "./Maincontentcomponents/Rowcard"
// import Word from "./Maincontentcomponents/word"
import Rowparagraph from "./Maincontentcomponents/Rowparagraph"
import Parallaxrow from "./Maincontentcomponents/Parallaxrow"
import Parallaxcard from "./Maincontentcomponents/Parallaxcard"
import Parallaxword from "./Maincontentcomponents/Parallaxword"
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../resources/images/jhcimg4.jpg'
import Img2 from '../resources/images/jhcimg3.jpg'
import Img3 from '../resources/images/jhcimg2.webp'
import Img4 from '../resources/images/jhcimg1.webp'
import Logo from '../resources/logo.svg'
import BackgroundLessImage from "../resources/images/BackgroundlessImage.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Square from "./Headercomponents/square"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main(){
    // const styles=(image)=>({    
    //     backgroundImage: `linear-gradient( rgba(24, 24, 25, 0.7), rgba(24, 24, 24, 0.7)),url(${image}`,
    //   //  backgroundImage: `url(${image})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     height:"100%",
    //     width:"100%",  
        
    //   })



    return(
        <div className={styles.main}>   

<div className="carousel-wrapper" >
            <Carousel  infiniteLoop useKeyboardArrows autoPlay showThumbs={false} stopOnHover={false} interval={7000} transitionTime={500}>
                <div style={{height:500, overflow:"hidden"}}>
             
                    <img alt="picture" src={Img1} />
               <div className={styles.overlay}>
               <div className={styles.carouselContent}>
                <span className={styles.carouselText1}>QUALITY SERVICES</span>
                <span className={styles.carouselText2}>GET THE BEST CARE SERVICE FROM 
                A GROUP <br/>OF DEDICATED AND EXPERIENCED <br/>PROFESSIONALS</span>
                <br/> <br/>
                <div className={styles.carouselButton}><button>Call for Referals</button></div>
              
                </div>
                </div>
                </div>
                <div style={{height:500, overflow:"hidden"}}>
             
                    <img alt="picture" src={Img3} />
               <div className={styles.overlay}>
               <div className={styles.carouselContent}>
               <span className={styles.carouselText1}>ALWAYS AVAILABLE</span>
                <span className={styles.carouselText2}>COUNT ON US TO BE THE BEST, WITH<br/>
 GUARANTEED 24/7 CARE SERVICES</span>
                <br/> <br/>
                <div className={styles.carouselButton}><button>Call for Referals</button></div>
              
                </div>
               </div>
                </div>
                <div style={{height:500, overflow:"hidden"}}>
                 
                    <img alt="picture" src={Img4} />
                   <div className={styles.overlay}>
                   <div className={styles.carouselContent}>
                <span className={styles.carouselText1}>REFERALS</span>
                <span className={styles.carouselText2}>CALL/FAX REFERALS NOW,<br/></span>
                <br/> <br/>
              <div  className={styles.carouselButton}><button>Fax Referals</button></div>
                </div>
                   </div>
                </div>
            </Carousel>
        </div>

            {/* <Slider/> */}
            <Row>
                <div className={styles.rowContent}>
          <div className={styles.rowContentLeft}>
            <span className={styles.rowTitle}>Welcome to <span style={{color:" rgb(189, 35, 35)"}}>Joint Health Care</span></span>
            <span className={styles.rowParagraph}>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <br/><br/>
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.

Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.

            </span>
          </div>
          <div className={styles.rowContentRight}>

            <img src={BackgroundLessImage} alt="logo"/>
          </div>
          </div>
                </Row>

                <Row>
                <div className={styles.rowContent2}>
    <div className={styles.rowHeading}>Our Services</div>
    <div className={styles.contents}>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-home"></i></span>
        <span className={styles.textLower}> Home health agency</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-user-md"></i></span>
        <span className={styles.textLower}> Skilled nurse</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-bicycle"></i></span>
        <span className={styles.textLower}>Physical Therapy</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa fa-user-md"></i></span>
        <span className={styles.textLower}>Speech Therapy</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-home"></i></span>
        <span className={styles.textLower}>Home health and CNA</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-user-md"></i></span>
        <span className={styles.textLower}>MSW</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-hospital-o"></i></span>
        <span className={styles.textLower}>Hospice care</span>
    </button>
    <button className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa fa-user-md"></i></span>
        <span className={styles.textLower}>Pediatrics consult</span>
    </button>
   
    </div>
        
          </div>
                </Row>
            <Parallaxrow >
      
<Row>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword icon={<i className="fa fa-thin fa-check fa-fade animate"></i>} wordtitle={"Quality Services"} >
           
           Get the best health care services <br/> from  
           a group of dedicated  <br/>
            professionals
            </Parallaxword>
            </Parallaxcard>
            <Parallaxcard height={"350px"} width={"300px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>}   wordtitle={"Always Available"} >
            Count on us
          
              to be the best,<br/> 
            with guaranteed  24/7 <br/> care services
            </Parallaxword>
                </Parallaxcard>
            <Parallaxcard height={"350px"} width={"300px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword  icon={ <i className="fa fa-diamond fa-spin"></i>} wordtitle={"Certified"} >
            Fully certified by the <br/>....................<br/>
            </Parallaxword>
                </Parallaxcard>
                <Parallaxcard height={"350px"} width={"300px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword  icon={ <i className="fa fa-file-text"></i>} wordtitle={"Application Forms"} >
            Click <span>here</span> to view all available<br/>  application forms<br/>
            </Parallaxword>
                </Parallaxcard>

            </Row>
            </Parallaxrow >
          <Row>
          <div className={styles.rowContent}>
          <div className={styles.contentRight}>
          <div className={styles.rowHeading2}>Rate Us</div>
          <div className={styles.rateContent}>
          <div className={styles.rate}>
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
  </div>
  <div className={styles.rateCaptions}>
  <i className="fa fa-hand-o-up fa-flip "></i>
    We need your Feedback 
  </div>
          </div>
          <div className={styles.contentLeft}>
          <div className={styles.rowHeading3}>VACANCIES</div>
          <div className={styles.contentLeftContent}>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}> <i className="fa fa-files-o"></i>
  </span>
        <span className={styles.textLower2}>Registered Nurse (RN)</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}>  <i className="fa fa-file-text "></i></span>
        <span className={styles.textLower2}> LVN/LPN</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-file "></i></span>
        <span className={styles.textLower2}> CNA</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-file-text-o "></i></span>
        <span className={styles.textLower2}>Home Health Aid</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-files-o "></i></span>
        <span className={styles.textLower2}>Physical Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-file-text "></i></span>
        <span className={styles.textLower2}>Occupational Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-file "></i></span>
        <span className={styles.textLower2}>Speech Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-file-text-o "></i></span>
        <span className={styles.textLower2}>MSW</span>
            </button>
            </div>
            <div className={styles.applicationFormElastic}> 
           
           <span className={styles.lineUp}> <i className="fa fa-hand-o-up fa-flip "></i>
           <span> Click to Open a form</span>
           </span>
            </div>
            <div className={styles.elasticBar}>

            </div>
          </div>
            </div>
          </Row>
        </div>
    )
}


