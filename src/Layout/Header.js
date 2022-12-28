
import styles from "./layout.module.css"
import Square from "./Headercomponents/square"
import { useState } from "react"
import 'font-awesome/css/font-awesome.min.css';
import Logos from "../resources/logo.svg"

export default function Headers(){
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
    return (
        <div className={ navbar? styles.header:styles.headerMinimized}>  
        <div className={styles.headerleft}>
            <div className={styles.logoFrame}> 
            <img alt="logo" src={Logos} style={{width:60, height:60}}/>
   <div className={styles.logoCaption}>
    <span className={styles.logoCaptionText1}>JOINT</span>
    <span className={styles.logoCaptionText2}>HEALTH CARE INC.</span>
   </div>
            </div>
          </div>
        <div className={styles.headermiddle}>  
     <Square fa={<i class='fa fa-phone' style={{fontSize:20}}></i>} title={"+(800) 123-4567"}/>
     <Square fa={<i class='fa fa-map-marker' style={{fontSize:20}}></i>} title={"Our Location"}/>
     <Square fa={<i class='fa fa-info' style={{fontSize:20}}></i>} title={"About Us"}/>
     <button className={styles.headerButton}>Book Appointment</button>
    
        </div>
        <div className={styles.menuicon}>
       
        <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        {/* <div className={styles.headerright}>
        <button className={styles.button}>Contact Us</button>
        </div>
    */}
        
        </div>
    )
    
}