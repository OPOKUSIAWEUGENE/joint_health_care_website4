import Headers from "./Header";
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
import AlternatingServices from "./Maincontentcomponents/AlternatingServices"
import ApplicationCard from "./Maincontentcomponents/ApplicationCard"
import Logos from "../resources/logo.svg"
import Electricity from "./Headercomponents/electricity"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { serviceRows } from "./servicesData"

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
                <span className={styles.carouselText1}>EXPERIENCED CARE, DELIVERED WITH HEART.</span>
               </HeaderAnimation>
               <Animation2>
                <span className={styles.carouselText2}>High-quality home health support designed to bring comfort, confidence, and clarity to every visit. Choose a team of dedicated professionals who bring skill, compassion, and dependable follow-through to every plan of care.</span>
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
               <span className={styles.carouselText1}>ALWAYS READY WHEN YOU NEED US.</span>
               </HeaderAnimation>
               <HeaderAnimation>
                <span className={styles.carouselText2}>A dependable point of contact for families, caregivers, and referral partners. We stay available 24/7 to answer questions, respond to changes, and keep care moving without unnecessary delays.</span>
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
                <span className={styles.carouselText1}>READY FOR THE NEXT STEP.</span>
                </HeaderAnimation>
                <Animation2>
                <span className={styles.carouselText2}>Simple intake, prompt response, and practical support from the first call. Submit referrals by phone or fax and let our team move quickly from first contact to care planning.</span>
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
           
	           Skilled care tailored to each patient and family. Comfort, clarity, and steady follow-through.
            </Parallaxword>
            <Parallaxword icon={ <span class='fa-stack '>
        <i className='fa fa-circle fa-stack-2x'></i>
        <i className='fa fa-phone fa-stack-1x fa-inverse'></i>
    </span>}   wordtitle={"Always Available"} >
	            24/7 support for questions and care changes. Quick response when you need it most.
            </Parallaxword>
            <Parallaxword 
              icon={ <span class='fa-stack '>
              <i className='fa fa-circle fa-stack-2x'></i>
              <i className='fa fa-diamond fa-spin fa-stack-1x fa-inverse'></i>
          </span>} 
            
             wordtitle={"Certified"} >
	            Certified care with safe, clear coordination. Trusted processes and respectful communication.
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
        <span className={styles.frameEyebrow}>What we stand for</span>
        </Animation2>
    <Animation2>
        <span className={styles.frameHeadline}>Personal care, trusted support, and calm at home.</span>
        </Animation2>
    <Animation2>
        <span className={styles.frame_text}>We deliver dependable home care with thoughtful communication, reliable follow-through, and support families can trust from the first call onward.
        </span>
        </Animation2>
    <Animation1>
        <div className={styles.frameHighlights}>
          <span className={styles.frameHighlight}>Personalized plans</span>
          <span className={styles.frameHighlight}>Clear communication</span>
          <span className={styles.frameHighlight}>Trusted by families</span>
          <span className={styles.frameHighlight}>Reliable follow-up</span>
        </div>
     </Animation1>
    <Animation1>  
    <span className={styles.fa_container}>
        <a className={styles.contactCard} href="mailto:jointhealthcare@yahoo.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className={styles.contactMeta}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>jointhealthcare@yahoo.com</span>
            </span>
        </a>
     <a className={styles.contactCard} href="tel:713 592 8955">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span className={styles.contactMeta}>
              <span className={styles.contactLabel}>Call</span>
              <span className={styles.contactValue}>713 592 8955</span>
            </span>
        </a>
     <span className={styles.frameContactNote}>For referrals, questions, or care coordination.</span>
     </span>
     </Animation1>
         <Animation2> 
            <div className={styles.slogan}>
<div className={styles.sloganLogoWrap}>    <img alt="logo" className={styles.sloganLogoImg} src={Logos} /></div>
<div className={styles.sloganText}>COMFORT CARE AT HOME, DELIVERED WITH TRUST AND CALM.</div>
                    </div>
                    </Animation2> 
    </div>

</div>

                </Row>
                <Row>
                  <div className={styles.rowContent2}>
                    <HeaderAnimation>
                      <div className={styles.disciplineHeadingCase}>
                        <div className={styles.rowHeading}>Our Disciplines</div>
                        <div className={styles.disciplineLead}>Three service lines under the Joint Health Care umbrella.</div>
                      </div>
                    </HeaderAnimation>
                    <div className={styles.disciplineGrid}>
                      <div className={styles.disciplineCard}>
                        <span className={styles.disciplineBadge}>Pediatric</span>
                        <div className={styles.disciplineTitle}>All-Hope Pediatric Home Health Service Inc.</div>
                        <div className={styles.disciplineText}>Supportive pediatric home care built around family needs, comfort, and continuity.</div>
                      </div>
                      <div className={styles.disciplineCard}>
                        <span className={styles.disciplineBadge}>Palliative</span>
                        <div className={styles.disciplineTitle}>All-Hope Palliative Care at Home Services Inc.</div>
                        <div className={styles.disciplineText}>Compassionate palliative support that helps families move through each stage with dignity.</div>
                      </div>
                      <div className={styles.disciplineCard}>
                        <span className={styles.disciplineBadge}>Home Health</span>
                        <div className={styles.disciplineTitle}>All-Hope Home Health Services Inc.</div>
                        <div className={styles.disciplineText}>Reliable home health support with steady clinical follow-through and coordination.</div>
                      </div>
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
                    <AlternatingServices rows={serviceRows} />
                </div>
          </Parallaxrow >
                </Row>

                <Row>
                  <div className={styles.whyUsAltSection}>
                    <div className={styles.whyUsAltMedia}>
                      <img
                        className={styles.whyUsAltImage}
                        src={BackgroundLessImage}
                        alt="Care team supporting a family"
                      />
                      <div className={styles.whyUsAltBadge}>Why families stay with us</div>
                    </div>
                    <div className={styles.whyUsAltContent}>
                      <HeaderAnimation>
                        <div className={styles.rowHeadingCase}>
                          <div className={styles.rowHeading}>Why Us?</div>
                          <div className={styles.disciplineLead}>
                            The same steady team, clear communication, and practical support throughout care.
                          </div>
                        </div>
                      </HeaderAnimation>
                      <div className={styles.whyUsAltList}>
                        <div className={styles.whyUsAltItem}>
                          <div className={styles.whyUsAltIcon}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </div>
                          <div>
                            <div className={styles.whyUsAltTitle}>Compassion first</div>
                            <div className={styles.whyUsAltText}>
                              We lead with empathy and keep each visit centered on dignity, comfort, and peace of mind.
                            </div>
                          </div>
                        </div>
                        <div className={styles.whyUsAltItem}>
                          <div className={styles.whyUsAltIcon}>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                          </div>
                          <div>
                            <div className={styles.whyUsAltTitle}>Always responsive</div>
                            <div className={styles.whyUsAltText}>
                              Questions, changes, and next steps are handled with quick follow-up and clear guidance.
                            </div>
                          </div>
                        </div>
                        <div className={styles.whyUsAltItem}>
                          <div className={styles.whyUsAltIcon}>
                            <i className="fa fa-shield" aria-hidden="true"></i>
                          </div>
                          <div>
                            <div className={styles.whyUsAltTitle}>Reliable care</div>
                            <div className={styles.whyUsAltText}>
                              Families rely on our consistent team and practical care planning to keep things steady.
                            </div>
                          </div>
                        </div>
                        <div className={styles.whyUsAltItem}>
                          <div className={styles.whyUsAltIcon}>
                            <i className="fa fa-users" aria-hidden="true"></i>
                          </div>
                          <div>
                            <div className={styles.whyUsAltTitle}>Family-centered</div>
                            <div className={styles.whyUsAltText}>
                              We stay connected with families and referral partners so everyone knows what comes next.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>

            <Parallaxrow >
      
<Row>
 <div className={styles.parallaxRowContents}>
            <Parallaxcard height={"420px"} width={"100%"} >
                <ApplicationCard onApply={Apply} />
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
