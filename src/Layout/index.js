import Headers from "./Header";
import Main from "./Main";
import Footer from "./Footer";
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
import { useEffect, useState } from "react"
import Animation1 from "./Maincontentcomponents/Animation1"
import Animation2 from "./Maincontentcomponents/Animation2"
import Animation3 from "./Maincontentcomponents/Animation3"
import HeaderAnimation from "./Maincontentcomponents/HeaderAnimation"
import Logos from "../resources/logo.svg"
import Electricity from "./Headercomponents/electricity"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

import Footercards from "./Footercomponents/Footercards"
import Footerparagraph from "./Footercomponents/footerparagraph"

import Footeraddress from "./Footercomponents/footeraddress"

export default function Layout(){

    const service = useRef(null);
    const address = useRef(null);

    const ourService = () => {

      service.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const ourAddress = () => {
      
        address.current?.scrollIntoView({ behavior: 'smooth' });
      };
      

      //header

      const [navbar, setNavbar]=useState(false)
      const modifyHeader=()=>{
          // console.log(window.scrollY);
      if(window.scrollY<80)
      {
      setNavbar(true);
      }
      else
      {
          setNavbar(false);
      }
      }
      
          window.addEventListener("scroll", modifyHeader)
          const [ display, setDisplay ] = useState( 'none' )
      
          function handleClick() {
      
              if ( display === 'none' ) {
      
                  setDisplay( 'block' )
      
              } else {
      
                  setDisplay( 'none' )
      
              }
      
          }

    
    const navigate=useNavigate();


    function Apply()
    {
        navigate('/new-application');
    }
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


  const afterFeedback= <div className={styles.afterfeedbackTab} >
    <div>Thanks!!</div>

  </div>

    const feedback=  <form className={styles.feedbackTab} onSubmit={handleSubmit}>
          
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

<div className={styles.comments}>

<div className={styles.commentTitle}>Kindly leave your feedback</div>
<div>
    <div className={styles.commentForm}>
        <textarea required name="comments">

        </textarea>
        <button  className={styles.applicationButton}>Submit</button>
    </div>
</div>
</div>
</form>

const [feedbackTab, setfeedbackTab]=useState(feedback);



      async function handleSubmit(event) {
        event.preventDefault();
    
        const data = new FormData(event.target);
       
        const requestOptions = {
          method: 'POST',
          // headers: { 'Content-Type': 'application/json' },
          body: data
      };
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}add-comment`,requestOptions);
  
      const datas = await response.json();
     
     if(response.ok)
     { 
        setfeedbackTab(afterFeedback)
     }
   else{
    alert('application not sent. please try sending the application again')
   }
      }
    

    return(
        <div className={styles.layout}>
            <>  <div className={styles.headerTop}>
        <div class={styles.headerTopleft}>
       <span>Joint Health Care Services - Providing comfort care in your home</span>
        </div>

        <div class={styles.headerTopright}>
        <span><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; <a href="mailto:jointhealthcare@yahoo.com"> jointhealthcare@yahoo.com</a></span>
         <span><i class="fa fa-phone" aria-hidden="true"></i>&nbsp; <a href="tel:713 592 8955"> 713 592 8955</a></span>
        
        <span className={styles.headertop_fa}>
<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;
  <a href="#" class="google"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;
   <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>&nbsp;&nbsp;
   </span>
        </div>
         </div>  
        <div className={ navbar? styles.header:styles.headerMinimized}>
  
        <div className={styles.headerleft}>
            <div className={styles.logoFrame}> 
            <img alt="logo" src={Logos} />
   <div className={styles.logoCaption}>
    <span className={styles.logoCaptionText1}>JOINT</span>
    <span className={styles.logoCaptionText2}>HEALTH CARE SERVICE INC.</span>
   </div>
            </div>
          </div>
        <div className={styles.headermiddle}> 
        {/* <Square fa={<i class='fa fa-info' style={{fontSize:20}}></i>} title={"About Us"}/> */}
        <Square fa={<i class='fa fa-wrench' style={{fontSize:20}}></i>} title={"Our Services"} onClick={ourService}/> 
        <Square fa={<i class='fa fa-map-marker' style={{fontSize:20}}></i>} title={"Our Location"} onClick={ourAddress}/>
     <Square fa={<i class='fa fa-phone' style={{fontSize:20}}></i>} title={"Contacts"} onClick={ourAddress}/>

  
     <a href="tel:713 592 8955">  <button className={styles.headerButton}>Call for Referrals</button></a>
    
        </div>
        <div className={styles.menuicon}>
            <button onClick={handleClick}> <i className="fa fa-bars" aria-hidden="true"></i></button>
            <div className={styles.dropdownmenu} style={{display:display}}>
            <div className={styles.dropdown}>
            {/* <span><i class='fa fa-info' style={{fontSize:20}}></i>&nbsp;About Us</span> */}
            <span ><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp;Our Services</span>
            <span ><i class='fa fa-map-marker' style={{fontSize:20}}></i>&nbsp;Our Location</span>
                <span><i class='fa fa-phone' style={{fontSize:20}}></i>&nbsp;Contacts</span>
               
     

   
            </div>
     </div>
            </div>
     
        </div>
        </>
        {/* <Headers ourService={ourService} ourAddress={ourAddress}/> */}
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
    <div className={styles.frameLeft} >

    <img className={styles.frameLeftImg} src={BackgroundLessImage2} alt="logo"/>
    </div>
    <div className={styles.frameRight}>
    <Animation2>
        <span className={styles.frame_text}>We provide high quality and holistic care that meets and exceeds
         the expectation of our clients in the comfort of their homes
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
<div className={styles.sloganText}> PROVIDING COMFORT CARE IN YOUR HOMES</div>
                    </div>
                    </Animation2> 
    </div>

</div>

                </Row>
                <Row>
                <Parallaxrow >
                <div ref={service} className={styles.rowContent2}>     
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
<div className={styles.serviceContentHeader}>Skilled nurse</div>
        <div className={styles.serviceContentText}>
           <div><strong>*</strong>Injection</div>
           <div> <strong>*</strong>Wound care </div>
           <div> <strong>*</strong>Tube feeding</div>
           <div>   <strong>*</strong>Bowel regimen </div>
           <div>   <strong>*</strong>Catheter care</div>
           <div>   <strong>*</strong>Nutritional instructions</div>
           <div>   <strong>*</strong>Respiratory/Tracheostomy</div>

           <div>  <strong>*</strong>Medication administration and Education</div>
             </div>

</div>
    
    </div>
       <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa-home"></i></div>
<div className={styles.serviceContent}>
<div className={styles.serviceContentHeader}>Non-skilled</div>
        <div className={styles.serviceContentText}>
        <div> <strong>*</strong>Home-health aid; </div>
          <div>    <strong>*</strong>Bath </div>
          <div>   <strong>*</strong>Dressing </div>
          <div> <strong>*</strong>Personal lining change</div> 
          <div> <strong>*</strong>Light house duties </div>
         </div>

</div>
    
    </div>
     <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa-bicycle"></i></div>
<div className={styles.serviceContent}>
<div className={styles.serviceContentHeader}>Physical Therapy</div>
        <div className={styles.serviceContentText}>
        <div>    <strong>*</strong>Reforming optimal level of functioning </div>
        <div>     <strong>*</strong>Gait training</div>
        <div>      <strong>*</strong>Range of motion </div>
        <div>     <strong>*</strong>Muscle strengthening </div>
             </div>

</div>
    
    </div>
     <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<div className={styles.serviceContentHeader}>Occupational Therapy</div>
        <div className={styles.serviceContentText}>
        <div>     <strong>*</strong>Improving fine motor skill</div>
        <div>     <strong>*</strong>Independents with activities of daily living</div>
        <div>     <strong>*</strong>Adequate use of equipment</div>
             </div>

</div>  
    </div>

    </div>

    <div className={styles.ServiceRowContents}>    
         <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<div className={styles.serviceContentHeader}>Speech Therapy</div>
        <div className={styles.serviceContentText}>
        <div>     <strong>*</strong>Swallowing disorders </div>
        <div>     <strong>*</strong>Improved delayed or post illness speech disorder </div>
             </div>

</div>  
    </div>

           <div className={styles.services}>
{/* <div className={styles.serviceImageContainer}><img className={styles.serviceImage} src={Img2} alt="services"/></div> */}
<div className={styles.fa_icons}><i className="fa fa fa-user-md"></i></div>
<div className={styles.serviceContent}>
<div className={styles.serviceContentHeader}>Healthcare Social Worker</div>
        <div className={styles.serviceContentText}>
        <div>   <strong>*</strong>Help in need of assistance   </div>    
          </div>

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
      
 {feedbackTab}
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
            <button onClick={Apply} className={styles.applicationButton}>Apply</button>
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
              {/* <Footer/> */}

              <div ref={address} className={styles.footer} >
            <div className={styles.footerUpper}>
            <div className={styles.logoFrame}> 
            <img alt="logo" src={Logo} style={{width:140, height:140}}/>
   <div className={styles.logoCaption}>
    <span className={styles.logoCaptionText1}>JOINT</span>
    <span className={styles.logoCaptionText2} style={{color:'white'}}>HEALTH CARE SERVICE INC.</span>
   </div>
            </div>
            	<div class={styles.socialmedia}>
	 <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
  <a href="#" class="google"><i class="fa fa-instagram"></i></a>
   <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>

 </div>
            </div>
            <div className={styles.footerLower}>
            <Footercards title={"Aims and Objectives"} >
     
         <div className={styles.aboutus}>
             {/* <img alt="logo" src={Logo} style={{width:100, height:100}}/>     */}
            <div className={styles.footerdescription}>
            To provide quality care that exceeds the expectation of our client and provide
            coordinated approach to home healthcare through our network providers: Skilled Nurs, Physical Therapy, 
            Social Workers, Home Health Aids. We also include family, primary physicians to create better care plan for individual treatmemnt to gain better understanding to desease process, better medication management and deit management.
            Our home care personnel are highly trained, skilled and compassionate staff that will result in effective outcome towards patient regaining optimum health            

               
            </div>
            </div>
</Footercards>
<Footercards title={"Our Services"} >
    <div className={styles.footercolumns}>

    <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Physical Therapy</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Speech Therapy</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Home health and CNA</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Skilled Nurse</Footerparagraph>
     
          </div>
        <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Home health</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Hospice care</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Pediatrics consult</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>MSW</Footerparagraph>
         </div>
        </div>
    </Footercards>

    <Footercards title={"Our Info"} >
    <div className={styles.footercolumns_infos}>
    <div className={styles.footer_infos}>
    <div className={styles.textBundle}>
    <Footeraddress><strong>Phone number:</strong></Footeraddress>
<Footeraddress> (code) 713 592 8955</Footeraddress>

</div>
<div className={styles.textBundle}>
<Footeraddress><strong>Fax number:</strong></Footeraddress>
<Footeraddress> (code) 713 592 8979</Footeraddress>
</div>
<div className={styles.textBundle}>
<Footeraddress><strong>After Office Hours:</strong></Footeraddress>
<Footeraddress> (code) 713 592 8955</Footeraddress>
</div>
</div>
<div className={styles.footer_infos}>
<div className={styles.textBundle}>
<Footeraddress><strong>Location:</strong></Footeraddress>
<Footeraddress>6430 Evening Rose Lare </Footeraddress>
<Footeraddress>Katy Tx 77449</Footeraddress>

</div>
<div className={styles.textBundle}>
<Footeraddress><span style={{fontSize:15, color:"rgb(252, 227, 209)" }}><strong>24 hour service</strong></span></Footeraddress>
</div>
</div>
</div>

    </Footercards>
    </div>
    <div className={styles.footerSub}>
        <span>Copyright 2022 <span style={{color:"rgb(218, 96, 9)"}}>Joint Health Care Inc.</span> All Rights Reserved  </span>
        <span><a>Privacy Policy</a></span>
    </div>

        </div>
              </div>
    )
 
}