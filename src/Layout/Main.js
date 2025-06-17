import styles from "./layout.module.css";
import Slider from "./Maincontentcomponents/Slider.js";
import Row from "./Maincontentcomponents/Row";
// import Rowcard from "./Maincontentcomponents/Rowcard"
// import Word from "./Maincontentcomponents/word"
import Rowparagraph from "./Maincontentcomponents/Rowparagraph";
import Parallaxrow from "./Maincontentcomponents/Parallaxrow";
import Parallaxcard from "./Maincontentcomponents/Parallaxcard";
import Parallaxword from "./Maincontentcomponents/Parallaxword";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../resources/images/thalassa1.jpg";
import Img2 from "../resources/images/talassa2.jpg";
import Img3 from "../resources/images/talass4.jpg";
import Img4 from "../resources/images/talassa3.jpg";
import Logo from "../resources/logo.svg";
import BackgroundLessImage from "../resources/images/BackgroundlessImage.png";
// import BackgroundLessImage2 from "../resources/images/bgless4.png";
import BackgroundLessImage2 from "../resources/images/engineer3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.min.css";
import Square from "./Headercomponents/square";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Animation1 from "./Maincontentcomponents/Animation1";
import Animation2 from "./Maincontentcomponents/Animation2";
import Animation3 from "./Maincontentcomponents/Animation3";
import HeaderAnimation from "./Maincontentcomponents/HeaderAnimation";
import Logos from "../resources/images/thalassa_logo.png";
import Electricity from "./Headercomponents/electricity";
import { useNavigate } from "react-router-dom";

export default function Main() {
  // const styles=(image)=>({
  //     backgroundImage: `linear-gradient( rgba(24, 24, 25, 0.7), rgba(24, 24, 24, 0.7)),url(${image}`,
  //   //  backgroundImage: `url(${image})`,
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     backgroundPosition: 'center',
  //     height:"100%",
  //     width:"100%",

  //   })

  const navigate = useNavigate();

  function Apply() {
    navigate("/new-application");
  }
  const boxVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    hidden: { opacity: 0.2, y: 20 },
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

  return (
    <div className={styles.main}>
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          stopOnHover={false}
          interval={7000}
          transitionTime={500}
        >
          <div className={styles.carousel}>
            <img alt="picture" src={Img1} />
            <div className={styles.overlay}>
              <HeaderAnimation>
                <div className={styles.carouselContent}>
                  <HeaderAnimation>
                    <span className={styles.carouselText1}>
                      QUALITY SERVICES
                    </span>
                  </HeaderAnimation>
                  <Animation2>
                    <span className={styles.carouselText2}>
                      {" "}
                      DELIVERS RELIABLE, EFFICIENT MARITIME <br /> AND PORT-SIDE
                      SUPPORT.
                    </span>
                  </Animation2>
                  <br /> <br />
                  <Animation2>
                    <div className={styles.carouselButton}>
                      {" "}
                      <a href="#">
                        <button>Contact Us</button>
                      </a>
                    </div>
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
                    <span className={styles.carouselText1}>
                      ALWAYS AVAILABLE
                    </span>
                  </HeaderAnimation>
                  <HeaderAnimation>
                    <span className={styles.carouselText2}>
                      {" "}
                      OPERATES AROUND THE CLOCK TO MEET YOUR <br /> MARITIME AND
                      PORT NEEDS.{" "}
                    </span>
                  </HeaderAnimation>
                  <br /> <br />
                  <Animation2>
                    <div className={styles.carouselButton}>
                      {" "}
                      <a href="#">
                        <button>Reach Out</button>
                      </a>
                    </div>
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
                    <span className={styles.carouselText1}>
                      COMPREHENSIVE SUPPORT
                    </span>
                  </HeaderAnimation>
                  <Animation2>
                    <span className={styles.carouselText2}>
                      From arrival to departure, we provide end-to-end <br />
                      assistance for all shore-side requirements.
                      <br />
                    </span>
                    <br /> <br />
                    <div className={styles.carouselButton}>
                      {" "}
                      <a href="tel:713 592 8955">
                        <button>Fax Referrals</button>
                      </a>
                    </div>
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
            <div className={styles.why_us_contents}>
              <Parallaxword
                icon={
                  <span class="fa-stack ">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-thin fa-check fa-stack-1x fa-inverse"></i>
                  </span>
                }
                wordtitle={"Quality Services"}
              >
                Thalassa Shore provides expert maritime and port support,
                ensuring smooth operations and reliable logistics.{" "}
              </Parallaxword>
              <Parallaxword
                icon={
                  <span class="fa-stack ">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                  </span>
                }
                wordtitle={"Always Available"}
              >
                We provide 24/7 support, ensuring that expert assistance and
                services are always just a call away, whenever you need them.
              </Parallaxword>
              <Parallaxword
                icon={
                  <span class="fa-stack ">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-diamond fa-spin fa-stack-1x fa-inverse"></i>
                  </span>
                }
                wordtitle={"Certified"}
              >
                we are certified to the highest industry standards, guaranteeing
                reliable and compliant maritime and port services.
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
            <img
              className={styles.frameLeftImg}
              src={BackgroundLessImage2}
              alt="logo"
            />
          </div>
          <div className={styles.frameRight}>
            <Animation2>
              <span className={styles.frame_text}>
                We deliver high-quality, comprehensive maritime and port
                services that meet and exceed client expectations, with
                reliability and excellence at every step.
              </span>
            </Animation2>
            <Animation1>
              <span className={styles.fa_container}>
                <span className={styles.fa}>
                  <a href="mailto:thelassa@yahoo.com">
                    {" "}
                    <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                    thelassa@yahoo.com
                  </a>
                </span>
                <span className={styles.fa}>
                  <a href="#">
                    {" "}
                    <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; 233000
                    000 00
                  </a>
                </span>
              </span>
            </Animation1>
            <Animation2>
              <div className={styles.slogan}>
                <div className={styles.sloganLogo}>
                  {" "}
                  <img alt="logo" className={styles.sloganLogo} src={Logos} />
                </div>
                <div className={styles.sloganText}>
                  {" "}
                  DELIVERING BEYOND THE SHORELINE
                </div>
              </div>
            </Animation2>
          </div>
        </div>
      </Row>
      <Row>
        <Parallaxrow>
          <div className={styles.rowContent2}>
            <HeaderAnimation>
              <div className={styles.rowHeadingCase}>
                <div className={styles.rowHeading}> Our Services</div>
              </div>
            </HeaderAnimation>
            {/* <div className={styles.contentDivide}>
              <div className={styles.ServiceRowContents}>
                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-ship"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Vessel Docking Support
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Efficient and safe mooring assistance
                      for all vessel types.
                      <br />
                      <strong>*</strong> Coordinated berthing schedules to
                      optimize port traffic.
                      <br />
                      <strong>*</strong> Expert handling of docking equipment
                      and procedures.
                      <br />
                      <strong>*</strong> Continuous monitoring to ensure vessel
                      safety.
                      <br />
                      <strong>*</strong> 24/7 availability for emergency docking
                      support.
                      <br />
                    </span>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-box"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Cargo Handling Services
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Safe loading and unloading of diverse
                      cargo types.
                      <br />
                      <strong>*</strong> Use of modern equipment to speed up
                      operations.
                      <br />
                      <strong>*</strong> Comprehensive inventory management and
                      tracking.
                      <br />
                      <strong>*</strong> Skilled personnel trained in hazardous
                      materials handling.
                      <br />
                      <strong>*</strong> Customized solutions for delicate or
                      oversized shipments.
                      <br />
                    </span>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-tools"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Vessel Maintenance Support
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Routine inspections to maintain vessel
                      readiness.
                      <br />
                      <strong>*</strong> On-site repairs and technical support.
                      <br />
                      <strong>*</strong> Coordination with certified maritime
                      engineers.
                      <br />
                      <strong>*</strong> Preventive maintenance to avoid costly
                      downtime.
                      <br />
                      <strong>*</strong> Compliance checks with maritime safety
                      regulations.
                      <br />
                    </span>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-life-ring"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Safety & Compliance Services
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Ensuring adherence to maritime safety
                      standards.
                      <br />
                      <strong>*</strong> Conducting regular safety drills and
                      inspections.
                      <br />
                      <strong>*</strong> Training staff in emergency response
                      protocols.
                      <br />
                      <strong>*</strong> Maintaining up-to-date certifications
                      and documentation.
                      <br />
                      <strong>*</strong> Proactive risk assessment and
                      mitigation strategies.
                      <br />
                    </span>
                  </div>
                </div>
              </div>

                 <div className={styles.ServiceRowContents}>
                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-ship"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Vessel Docking Support
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Efficient and safe mooring assistance
                      for all vessel types.
                      <br />
                      <strong>*</strong> Coordinated berthing schedules to
                      optimize port traffic.
                      <br />
                      <strong>*</strong> Expert handling of docking equipment
                      and procedures.
                      <br />
                      <strong>*</strong> Continuous monitoring to ensure vessel
                      safety.
                      <br />
                      <strong>*</strong> 24/7 availability for emergency docking
                      support.
                      <br />
                    </span>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-box"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Cargo Handling Services
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Safe loading and unloading of diverse
                      cargo types.
                      <br />
                      <strong>*</strong> Use of modern equipment to speed up
                      operations.
                      <br />
                      <strong>*</strong> Comprehensive inventory management and
                      tracking.
                      <br />
                      <strong>*</strong> Skilled personnel trained in hazardous
                      materials handling.
                      <br />
                      <strong>*</strong> Customized solutions for delicate or
                      oversized shipments.
                      <br />
                    </span>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-tools"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Vessel Maintenance Support
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Routine inspections to maintain vessel
                      readiness.
                      <br />
                      <strong>*</strong> On-site repairs and technical support.
                      <br />
                      <strong>*</strong> Coordination with certified maritime
                      engineers.
                      <br />
                      <strong>*</strong> Preventive maintenance to avoid costly
                      downtime.
                      <br />
                      <strong>*</strong> Compliance checks with maritime safety
                      regulations.
                      <br />
                    </span>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.fa_icons}>
                    <i className="fa fa-life-ring"></i>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceContentHeader}>
                      Safety & Compliance Services
                    </span>
                    <span className={styles.serviceContentText}>
                      <strong>*</strong> Ensuring adherence to maritime safety
                      standards.
                      <br />
                      <strong>*</strong> Conducting regular safety drills and
                      inspections.
                      <br />
                      <strong>*</strong> Training staff in emergency response
                      protocols.
                      <br />
                      <strong>*</strong> Maintaining up-to-date certifications
                      and documentation.
                      <br />
                      <strong>*</strong> Proactive risk assessment and
                      mitigation strategies.
                      <br />
                    </span>
                  </div>
                </div>
              </div>

            </div> */}
          </div>
        </Parallaxrow>

        <div className={styles.rowContent2}>
          <HeaderAnimation>
            <div className={styles.rowHeadingCase}>
              <div className={styles.rowHeading}>Why Us?</div>
            </div>
          </HeaderAnimation>
          <div className={styles.why_us_contents}>
            <Parallaxword
              icon={
                <span class="fa-stack ">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-thin fa-check fa-stack-1x fa-inverse"></i>
                </span>
              }
              wordtitle={"Quality Services"}
            >
              We provide reliable and efficient maritime support, ensuring every
              operation meets the highest standards. Our focus is on safety,
              precision, and exceeding client expectations.
            </Parallaxword>
            <Parallaxword
              icon={
                <span class="fa-stack ">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                </span>
              }
              wordtitle={"Always Available"}
            >
              We provide 24/7 maritime and port support, ensuring assistance is
              ready whenever you need it. Our team is committed to being
              reliable and responsive around the clock.
            </Parallaxword>
            <Parallaxword
              icon={
                <span class="fa-stack ">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-diamond fa-spin fa-stack-1x fa-inverse"></i>
                </span>
              }
              wordtitle={"Certified Excellence"}
            >
              Thalassa Shore is fully certified and compliant with industry
              standards, ensuring trusted and high-quality maritime and port
              services that you can rely on.
            </Parallaxword>
          </div>
        </div>
      </Row>

      <Parallaxrow>
        <Row>
          <div className={styles.parallaxRowContents}>
            <Parallaxcard height={"350px"} width={"28%"}>
              <div className={styles.rating}>
                <div className={styles.rateHeading}> RATE US</div>

                <div className={styles.rateContent}>
                  <div className={styles.rate}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>
                </div>
                <div className={styles.rateCaptions}>
                  <i className="fa fa-hand-o-up fa-flip "></i>
                  Rate Us
                </div>
              </div>

              <div className={styles.comment}>
                <div className={styles.commentTitle}>Leave a Comment</div>
                <div>
                  <form className={styles.commentForm}>
                    <textarea></textarea>
                    <button className={styles.applicationButton}>Submit</button>
                  </form>
                </div>
              </div>
            </Parallaxcard>

            <Parallaxcard height={"350px"} width={"50%"}>
              <img
                className={styles.parallaxCardImg}
                src={BackgroundLessImage2}
                alt="logo"
              />
            </Parallaxcard>

            <Parallaxcard height={"350px"} width={"25%"}>
              <div className={styles.application}>
                <div className={styles.applicationFormHeading}>
                  APPLICATION FORMS
                </div>
                <div className={styles.contentLeftContent}>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      {" "}
                      <i className="fa fa-files-o"></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      {" "}
                      <i className="fa fa-file-text "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      <i className="fa fa-file "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      <i className="fa fa-file-text-o "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      <i className="fa fa-files-o "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      <i className="fa fa-file-text "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      <i className="fa fa-file "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                  <button className={styles.applicationForms}>
                    <span className={styles.textupper}>
                      <i className="fa fa-file-text-o "></i>
                    </span>
                    <span className={styles.textLower2}>Lorem ipsum dolor</span>
                  </button>
                </div>
                <div className={styles.applicationButtonContainer}>
                  <button
                    disabled
                    onClick={Apply}
                    className={styles.applicationButton}
                  >
                    Apply
                  </button>
                  <div className={styles.applicationFormElastic}>
                    <div className={styles.lineUp}>
                      {" "}
                      <i className="fa fa-hand-o-up fa-flip "></i>
                      <span> Open an application form</span>
                    </div>
                  </div>
                </div>
              </div>
            </Parallaxcard>
          </div>
        </Row>
      </Parallaxrow>
    </div>
  );
}
