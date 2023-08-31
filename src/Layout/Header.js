
import styles from "./layout.module.css"
import Square from "./Headercomponents/square"
import { useState } from "react"
import 'font-awesome/css/font-awesome.min.css';
import Logos from "../resources/logo.svg"

export default function Headers(props){
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
    return (<>  <div className={styles.headerTop}>
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
        <Square fa={<i class='fa fa-wrench' style={{fontSize:20}}></i>} title={"Our Services"} onClick={props.ouServices}/> 
        <Square fa={<i class='fa fa-map-marker' style={{fontSize:20}}></i>} title={"Our Location"} />
     <Square fa={<i class='fa fa-phone' style={{fontSize:20}}></i>} title={"Contacts"}/>

  
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
    )
    
}