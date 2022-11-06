
import styles from "./layout.module.css"
import Square from "./Headercomponents/square"
import Logo from "./Headercomponents/Logo"
import { useState } from "react"
import 'font-awesome/css/font-awesome.min.css';
import Logo22 from "../resources/logo22.png"


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
        <img alt="logo" src={Logo22} style={{width:60, height:60}}/>
        </div>
        <div className={styles.headermiddle}>
        
        <Square title={"Home"}/>
  
     <Square title={"Contact"}/>
     <Square title={"About"}/>
    
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