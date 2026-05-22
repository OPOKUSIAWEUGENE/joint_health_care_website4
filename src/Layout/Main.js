import styles from "./layout.module.css"
import Slider from "./Maincontentcomponents/Slider.js"
import Row from "./Maincontentcomponents/Row"
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
import Logos from "../resources/logo.svg"
import Electricity from "./Headercomponents/electricity"
import { useNavigate } from "react-router-dom"
import { serviceRows } from "./servicesData"

export default function Main(){

    const navigate=useNavigate();


    function Apply()
    {
        navigate('/new-application');
    }
    const boxVariant = {
        visible: { opacity: 1,  y: 0, transition: { duration: 0.8 } },
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
    

    const slides = [
      {
        image: Img1,
        eyebrow: "Compassionate care at home",
        title: "Experienced Care, Delivered With Heart.",
        subtitle:
          "High-quality home health support designed to bring comfort, confidence, and clarity to every visit.",
        body:
          "Choose a team of dedicated professionals who bring skill, compassion, and dependable follow-through to every plan of care. We work closely with families and referral partners to provide consistent support, clear communication, and a calm experience from the first call onward.",
        action: "Call for Referrals",
        details: ["Dedicated professionals", "Comfort and dignity", "Clear communication"],
      },
      {
        image: Img3,
        eyebrow: "Around-the-clock coverage",
        title: "Always Ready When You Need Us.",
        subtitle:
          "A dependable point of contact for families, caregivers, and referral partners.",
        body:
          "We stay available 24/7 to answer questions, respond to changes, and keep care moving without unnecessary delays. That means faster support and fewer handoff issues for the people who rely on us.",
        action: "Call for Referrals",
        details: ["24/7 response", "Fast intake", "Family support"],
      },
      {
        image: Img4,
        eyebrow: "Fast referral handling",
        title: "Ready for the Next Step.",
        subtitle:
          "Simple intake, prompt response, and practical support from the first call.",
        body:
          "Submit referrals by phone or fax and let our team move quickly from first contact to care planning. We keep the process clear so patients, families, and partners always know what comes next.",
        action: "Fax Referrals",
        details: ["Phone or fax", "Quick follow-up", "Simple next steps"],
      },
    ];

    const renderSlide = (slide, index) => (
      <div className={styles.carousel} key={slide.title}>
        <img alt="healthcare support scene" src={slide.image} />
        <div className={styles.overlay}>
          <div className={styles.carouselContent}>
            <div className={styles.carouselCopy}>
              <HeaderAnimation>
                <span className={styles.carouselEyebrow}>
                  {slide.eyebrow}
                </span>
              </HeaderAnimation>
              <HeaderAnimation>
                <span className={styles.carouselText1}>{slide.title}</span>
              </HeaderAnimation>
              <Animation2>
                <span className={styles.carouselSubtitle}>{slide.subtitle}</span>
              </Animation2>
              <Animation2>
                <span className={styles.carouselText2}>{slide.body}</span>
              </Animation2>
              <Animation2>
                <div className={styles.carouselActions}>
                  <a href="tel:713 592 8955" className={styles.carouselButton}>
                    <button>{slide.action}</button>
                  </a>
                  <div className={styles.carouselDetails}>
                    {slide.details.map((detail) => (
                      <span className={styles.carouselDetail} key={detail}>
                        {detail}
                      </span>
                    ))}
                  </div>
                  {index === 0 && (
                    <span className={styles.carouselNote}>
                      Licensed support for families, care managers, and referral partners across every stage of care.
                    </span>
                  )}
                </div>
              </Animation2>
            </div>
          </div>
        </div>
      </div>
    );

    return(
        <div className={styles.main}>   

<div className="carousel-wrapper" >
            <Carousel  infiniteLoop useKeyboardArrows autoPlay showThumbs={false} stopOnHover={false} interval={4500} transitionTime={300}>
              {slides.map((slide, index) => renderSlide(slide, index))}
            </Carousel>
        </div>

            
            <Row>
                <div className={styles.rowContent}>
          <div className={styles.rowContentLeft}>
            
            
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
            

          </div>
          
          </div>
                </Row>
                <Row>
<div className={styles.frame}>
    <div className={styles.frameLeft}>
    <img className={styles.frameLeftImg} src={BackgroundLessImage2} alt="logo"/>
    </div>
    <div className={styles.frameRight}>
      <Animation2>
        <span className={styles.frameEyebrow}>What we stand for</span>
      </Animation2>
      <Animation2>
        <span className={styles.frameHeadline}>
          Personal care, trusted support, and calm at home.
        </span>
      </Animation2>
      <Animation2>
        <span className={styles.frame_text}>
          We deliver dependable home care with thoughtful communication, reliable follow-through, and support families can trust from the first call onward.
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
        <div className={styles.frameDisciplines}>
          <span className={styles.frameDisciplinesLabel}>Joint Health Care disciplines</span>
          <div className={styles.frameDisciplineList}>
            <span className={styles.frameDisciplineItem}>All-Hope Pediatric Home Health Service Inc.</span>
            <span className={styles.frameDisciplineItem}>All-Hope Palliative Care at Home Services Inc.</span>
            <span className={styles.frameDisciplineItem}>All-Hope Home Health Services Inc.</span>
          </div>
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
          <div className={styles.sloganLogoWrap}>
            <img alt="logo" className={styles.sloganLogoImg} src={Logos} />
          </div>
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
                <div className={styles.rowContent2}>     
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
    )
}
