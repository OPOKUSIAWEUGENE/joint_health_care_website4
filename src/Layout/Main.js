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
               <div className={styles.overlay}>the book is on the table</div>
                </div>
                <div style={{height:500, overflow:"hidden"}}>
             
                    <img alt="picture" src={Img3} />
               <div className={styles.overlay}>the book is on the table</div>
                </div>
                <div style={{height:500, overflow:"hidden"}}>
                 
                    <img alt="picture" src={Img4} />
                   <div className={styles.overlay}>the book is on the table</div>
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
    <div className={styles.services}>
   


        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}> Home health services</span>
    </div>
    <div className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Physical Therapy</span>
    </div>
    <div className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Speech Therapy</span>
    </div>
    <div className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Home health and CNA
MSW</span>
    </div>
    <div className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Hospice care</span>
    </div>
    <div className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Pediatrics consult</span>
    </div>
    <div className={styles.services}>
        <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>First service</span>
    </div>
    </div>
        
          </div>
                </Row>
            <Parallaxrow >
      
<Row>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword icon={<i className="fa fa-thin fa-check fa-fade animate"></i>} wordtitle={"Quality Services"} button={"Contact us now"}>
           
           Every home needs reliable home <br/>  
            care service. Let D's  World<br/> 
             handle all  your  home<br/>
             care services
            </Parallaxword>
            </Parallaxcard>
            <Parallaxcard height={"400px"} width={"340px"} background={"rgb(51, 54, 69)"}>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>} titlecolor={"white"} contentcolor={"white"} wordtitle={"Always Available"} button={"Contact us now"}>
            Call D's World today. Count<br/>
          
             on Ds World to be the<br/>  best,
            with guaranteed <br/> home care services
            </Parallaxword>
                </Parallaxcard>
            <Parallaxcard height={"350px"} width={"340px"} background={"rgb(255, 255, 255)"}>
            <Parallaxword  icon={ <i className="fa fa-diamond fa-spin"></i>} wordtitle={"Certified"} button={"Contact us now"}>
            Fully certified by the <br/>....................<br/>
            </Parallaxword>
                </Parallaxcard>

            </Row>
            </Parallaxrow >
          <Row>
          <div className={styles.rowContent}>
          <div className={styles.contentRight}>
          <div className={styles.rowHeading2}>Rate Us</div>
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
          <div className={styles.contentLeft}>
          <div className={styles.rowHeading3}>VACANCIES</div>
          <div className={styles.contentLeftContent}>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}> <FontAwesomeIcon icon="fa-brands fa-twitter" />
  </span>
        <span className={styles.textLower}>Registered Nurse (RN)</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}>
                <i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}> LVN/LPN</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}> CNA</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Home Health Aid</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Physical Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Occupational Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>Speech Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textUpper}><i className="fa fa-diamond fa-spin"></i></span>
        <span className={styles.textLower}>MSW</span>
            </button>
            </div>
          </div>
            </div>
          </Row>
        </div>
    )
}


