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
import BackgroundLessImage2 from "../resources/images/bgless4.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Square from "./Headercomponents/square"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"
import Animation1 from "./Maincontentcomponents/Animation1"
import Animation2 from "./Maincontentcomponents/Animation2"
import Animation3 from "./Maincontentcomponents/Animation3"
import HeaderAnimation from "./Maincontentcomponents/HeaderAnimation"
import Logos from "../resources/logo.svg"
import Electricity from "./Headercomponents/electricity"

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
    const boxVariant = {
        visible: { opacity: 1,  y: 0, transition: { duration: 2 } },
        hidden: { opacity: 0.2,  y: 20  }
      };
      const control = useAnimation();
      const [ref, inView] = useInView();
     useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    

    return(
        <div className={styles.main}>   

<div className="carousel-wrapper" >
            <Carousel  infiniteLoop useKeyboardArrows autoPlay showThumbs={false} stopOnHover={false} interval={7000} transitionTime={500}>
                <div className={styles.carousel}>
             
                    <img alt="picture" src={Img1} />
               <div className={styles.overlay}>
               <HeaderAnimation>
               <div className={styles.carouselContent}>
               <HeaderAnimation>
                <span className={styles.carouselText1}>QUALITY SERVICES</span>
               </HeaderAnimation>
               <Animation2>
                <span className={styles.carouselText2}>GET THE BEST HEALTH CARE SERVICE FROM 
                THIS <br/>GROUP OF DEDICATED AND EXPERIENCED <br/>PROFESSIONALS</span>
                </Animation2>
                <br/> <br/>
                <Animation2>
                <div className={styles.carouselButton}>   <a href="tel:713 592 8955"><button>Call for Referrals</button></a></div>
                </Animation2>
                </div>
                </HeaderAnimation>
                </div>
                </div>
                <div className={styles.carousel}>
                    <img alt="picture" src={Img3} />
               <div className={styles.overlay}>
                <Animation2>
               <div className={styles.carouselContent}>
               <HeaderAnimation>
               <span className={styles.carouselText1}>ALWAYS AVAILABLE</span>
               </HeaderAnimation>
               <HeaderAnimation>
                <span className={styles.carouselText2}>COUNT ON US TO BE THE BEST, WITH<br/>
 GUARANTEED 24/7 CARE SERVICES</span>
 </HeaderAnimation>
                <br/> <br/>
                <Animation2>
                <div className={styles.carouselButton}>   <a href="tel:713 592 8955"><button>Call for Referrals</button></a></div>
                </Animation2>
                </div>
                </Animation2>
               </div>
                </div>
                <div className={styles.carousel}>      
                    <img alt="picture" src={Img4} />
                   <div className={styles.overlay}>
                   <HeaderAnimation>
                   <div className={styles.carouselContent}>
                   <HeaderAnimation>
                <span className={styles.carouselText1}>REFERRALS</span>
                </HeaderAnimation>
                <Animation2>
                <span className={styles.carouselText2}>CALL/FAX REFERRALS NOW,<br/></span>
                <br/> <br/>
              <div  className={styles.carouselButton}>   <a href="tel:713 592 8955"><button>Fax Referrals</button></a></div>
              </Animation2>
                </div>
                </HeaderAnimation>
                   </div>
                </div>
            </Carousel>
        </div>

            {/* <Slider/> */}
            <Row>
                <div className={styles.rowContent}>
          <div className={styles.rowContentLeft}>
            {/* <HeaderAnimation>
            <div className={styles.rowTitle}>Welcome to <span style={{color:" rgb(189, 35, 35)"}}>Joint Health Care Service Inc.</span></div>
            </HeaderAnimation> */}
            {/* <span className={styles.rowParagraph}>
            <br/>  <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
            <span className={styles.rowContentSpan}>Our Mission</span>
             <br/>
            To promote high quality and holistic care that meets and exceeds the expectation of our clients in the confort of their homes
            <br/><br/>
        <span className={styles.rowContentSpan}>Objectives  </span>
        <br/>
        To provide quality care that exceeds the expectation of our client and provide
            coordinated approach to home healthcare through our network providers: Skilled Nurs, Physical Therapy, 
            Social Workers, Home Health Aids. We also include family, primary physicians to create better care plan for individual treatmemnt to gain better understanding to desease process, better medication management and deit management.
            Our home care personnel are highly trained, skilled and compassionate staff that will result in effective outcome towards patient regaining optimum health            
      
</motion.div>


            </span> */}
              <div className={styles.why_us_contents}>
                    <Parallaxword 
                    icon={ <span class='fa-stack '>
                    <i className='fa fa-circle fa-stack-2x'></i>
                    <i className='fa fa-thin fa-check fa-stack-1x fa-inverse'></i>
                </span>}  
                    
                    wordtitle={"Quality Services"} >
           
           Get the best health care services from this group of dedicated professionals
            </Parallaxword>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>}   wordtitle={"Always Available"} >
            Count on us to be the best, with guaranteed  24/7 care services
            </Parallaxword>
            <Parallaxword 
              icon={ <span class='fa-stack '>
              <i className='fa fa-circle fa-stack-2x'></i>
              <i className='fa fa-diamond fa-spin fa-stack-1x fa-inverse'></i>
          </span>} 
            
             wordtitle={"Certified"} >
            Fully certified and accredited by the State of Taxas
            </Parallaxword>
                        </div>
            {/* <Animation1> 
            <div className={styles.slogan}>

<div className={styles.sloganLogo}>    <img alt="logo" className={styles.sloganLogo} src={Logos} /></div>

<div className={styles.sloganText}> PROVIDING CONFORT CARE IN YOUR HOMES</div>


                    </div>
                    </Animation1>  */}

          </div>
          {/* <div className={styles.rowContentRight}>

            <img src={BackgroundLessImage} alt="logo"/>
          </div> */}
          </div>
                </Row>
                <Row>
<div className={styles.frame}>
    <div className={styles.frameLeft}>
    <img className={styles.frameLeftImg} src={BackgroundLessImage2} alt="logo"/>
    </div>
    <div className={styles.frameRight}>
    <Animation2>
        <span className={styles.frame_text}>We provide high quality and holistic care that meets and exceeds
         the expectation of our clients in the confort of their homes
        </span>
        </Animation2>
    <Animation1>  
    <span className={styles.fa_container}>
        <span className={styles.fa}><a href="mailto:jointhealthcare@yahoo.com"> <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; jointhealthcare@yahoo.com</a></span>
     <span className={styles.fa}><a href="tel:713 592 8955"> <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; 713 592 8955</a></span>
     </span>
     </Animation1>
         <Animation2> 
            <div className={styles.slogan}>
<div className={styles.sloganLogo}>    <img alt="logo" className={styles.sloganLogo} src={Logos} /></div>
<div className={styles.sloganText}> PROVIDING CONFORT CARE IN YOUR HOMES</div>
                    </div>
                    </Animation2> 
    </div>

</div>

                </Row>
                <Row>
                <Parallaxrow >
                <div className={styles.rowContent2}>     
                    <HeaderAnimation>
                    <div className={styles.rowHeadingCase}>
                    <div className={styles.rowHeading}>  Our Services</div>
                    </div>
                    </HeaderAnimation>
                    <div className={styles.contentDivide}>
                   
                    <div className={styles.ServiceRowContents}>
       
    <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><i className="fa fa-user-md"></i></div> */}

<div className={styles.fa_icons}><i className="fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Skilled nurse</span>
        <span className={styles.serviceContentText}>
           <strong>*</strong>Injection
           <strong>*</strong>Wound care 
           <strong>*</strong>Tube feeding
           <strong>*</strong>Bowel regimen 
           <strong>*</strong>Catheter care
           <strong>*</strong>Nutritional instructions
           <strong>*</strong>Respiratory/Tracheostomy

           <strong>*</strong>Medication administration and Education
             </span>

</div>
    
    </div>
       <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa-home"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Non-skilled</span>
        <span className={styles.serviceContentText}>
          Home-health aid;
          <strong>*</strong>Bath 
          <strong>*</strong>Dressing 
          <strong>*</strong>Personal lining change 
          <strong>*</strong>Light house duties 
         </span>

</div>
    
    </div>
     <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa-bicycle"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Physical Therapy</span>
        <span className={styles.serviceContentText}>
        <strong>*</strong>Reforming optimal level of functioning 
        <strong>*</strong>Gait training
        <strong>*</strong>Range of motion 
        <strong>*</strong>Muscle strengthening 
             </span>

</div>
    
    </div>
     <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Occupational Therapy</span>
        <span className={styles.serviceContentText}>
        <strong>*</strong>Improving fine motor skill
        <strong>*</strong>Independents with activities of daily living
        <strong>*</strong>Adequate use of equipment
             </span>

</div>  
    </div>

    </div>

    <div className={styles.ServiceRowContents}>    
         <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Speech Therapy</span>
        <span className={styles.serviceContentText}>
        <strong>*</strong>Swallowing disorders 
        <strong>*</strong>Improved delayed or post illness speech disorder 
             </span>

</div>  
    </div>

           <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Healthcare Social Worker</span>
        <span className={styles.serviceContentText}>
            <strong>*</strong>Help in need of assistance       
          </span>

</div>  
    </div>

           <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Medical Supply Equipment</span>
        <span className={styles.serviceContentText}>
            {/* <strong>*</strong>Walker Wheelchair
            <strong>*</strong> Clutches
             <strong>*</strong>Hospital Bed
              <strong>*</strong>Wound Care Supplies
               <strong>*</strong>Foley Catheter
                <strong>*</strong>Breathin Equipment
                 <strong>*</strong>Commode
                  <strong>*</strong>Diapers
                   <strong>*</strong>Underpaid Etc. */}
            
          </span>

</div>  
    </div>

            <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i class="fa fa-ambulance" aria-hidden="true"></i></div>
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Transportation to doctor's visit </span>
        <span className={styles.serviceContentText}>
     
            
          </span>

</div>  
    </div>
    </div>

    
    
    <div className={styles.ServiceRowContents}>
     <div className={styles.services}>
   <div className={styles.fa_icons}><i className="fa fa-home"></i></div>     
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Home health and CNA</span>
        <span className={styles.serviceContentText}>
            {/* <span><Electricity height={10} width={30} fill={"rgb(189, 175, 175)"}/>the book </span> */}
          
             </span>

</div>
    
    </div>
      <div className={styles.services}>
        <div className={styles.fa_icons}><i className="fa fa-user-md" aria-hidden="true"></i></div>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>MSW</span>
        <span className={styles.serviceContentText}>
            {/* <span><Electricity height={10} width={30} fill={"rgb(189, 175, 175)"}/>the book </span> */}
        
             </span>

</div>
    
    </div>
      <div className={styles.services}>
        <div className={styles.fa_icons}><i class="fa fa-hospital-o" aria-hidden="true"></i></div>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Hospice care</span>
        <span className={styles.serviceContentText}>
            {/* <span><Electricity height={10} width={30} fill={"rgb(189, 175, 175)"}/>the book </span> */}
           
             </span>

</div>
    
    </div>
    <div className={styles.services}>
        <div className={styles.fa_icons}><i class="fa fa fa-user-md" aria-hidden="true"></i></div>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.serviceContent}>
<span className={styles.serviceContentHeader}>Pediatrics consult</span>
        <span className={styles.serviceContentText}>
            {/* <span><Electricity height={10} width={30} fill={"rgb(189, 175, 175)"}/>the book </span> */}
            
             </span>

</div>
    
    </div>
 
  
  
   
    </div>

    </div>
             
               
                  
   
        
          </div>
          </Parallaxrow >
              
                <div className={styles.rowContent2}>
                    <HeaderAnimation>
                        <div className={styles.rowHeadingCase}>
                    <div className={styles.rowHeading}>Why Us?</div>
                    </div>
                    </HeaderAnimation>
                    <div className={styles.why_us_contents}>
                    <Parallaxword 
                    icon={ <span class='fa-stack '>
                    <i className='fa fa-circle fa-stack-2x'></i>
                    <i className='fa fa-thin fa-check fa-stack-1x fa-inverse'></i>
                </span>}  
                    
                    wordtitle={"Quality Services"} >
           
           Get the best health care services from this group of dedicated professionals
            </Parallaxword>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>}   wordtitle={"Always Available"} >
            Count on us to be the best, with guaranteed  24/7 care services
            </Parallaxword>
            <Parallaxword 
              icon={ <span class='fa-stack '>
              <i className='fa fa-circle fa-stack-2x'></i>
              <i className='fa fa-diamond fa-spin fa-stack-1x fa-inverse'></i>
          </span>} 
            
             wordtitle={"Certified"} >
            Fully certified and accredited by the State of Taxas
            </Parallaxword>
                        </div>
                    </div>

                </Row>
               
            <Parallaxrow >
      
<Row>
 <div className={styles.parallaxRowContents}>
                <Parallaxcard height={"350px"} width={"28%"} >
                <Animation1>
    <button className={styles.referrals}>
    <button className={styles.applicationButton}><i class="fa fa-user-plus" aria-hidden="true"></i> Referrals</button>
       
        <div className={styles.applicationFormElastic}> 
           
           <div className={styles.lineUp}> <i className="fa fa-hand-o-up fa-flip "></i>
           <span>  Click to open Referral form</span>
         
           </div>
            </div>
    </button>

    </Animation1>
          
          <div className={styles.rating}>
          <div className={styles.rateHeading}>  RATE US</div>
      
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
Rate Us
  </div>
  </div>
            </Parallaxcard>
          
            <Parallaxcard height={"350px"} width={"50%"} >
            <img className={styles.parallaxCardImg} src={BackgroundLessImage2} alt="logo"/>
                </Parallaxcard>
              
            <Parallaxcard height={"350px"} width={"25%"} >
                <div className={styles.application}>
            <div className={styles.applicationFormHeading}>APPLICATION FORMS</div>
            <div className={styles.contentLeftContent}>
            
            <button className={styles.applicationForms}>
            <span className={styles.textupper}> <i className="fa fa-files-o"></i>
  </span>
        <span className={styles.textLower2}>Registered Nurse (RN)</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}>  <i className="fa fa-file-text "></i></span>
        <span className={styles.textLower2}> LVN/LPN</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}><i className="fa fa-file "></i></span>
        <span className={styles.textLower2}> CNA</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}><i className="fa fa-file-text-o "></i></span>
        <span className={styles.textLower2}>Home Health Aid</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}><i className="fa fa-files-o "></i></span>
        <span className={styles.textLower2}>Physical Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}><i className="fa fa-file-text "></i></span>
        <span className={styles.textLower2}>Occupational Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}><i className="fa fa-file "></i></span>
        <span className={styles.textLower2}>Speech Therapy</span>
            </button>
            <button className={styles.applicationForms}>
            <span className={styles.textupper}><i className="fa fa-file-text-o "></i></span>
        <span className={styles.textLower2}>MSW</span>
            </button>
            </div>
            <div className={styles.applicationButtonContainer}>
            <button className={styles.applicationButton}>Apply</button>
            <div className={styles.applicationFormElastic}> 
           
           <div className={styles.lineUp}> <i className="fa fa-hand-o-up fa-flip "></i>
           <span>  Open an application form</span>
         
           </div>
            </div>
            </div>
            </div>
                </Parallaxcard>
              
             
                </div>

            </Row>
            </Parallaxrow >
 
        </div>
    )
}


