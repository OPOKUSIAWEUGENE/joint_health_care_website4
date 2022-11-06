import styles from "./layout.module.css"
import Footercards from "./Footercomponents/Footercards"
import Footerparagraph from "./Footercomponents/footerparagraph"
import Electricity from "./Headercomponents/electricity"
import Footeraddress from "./Footercomponents/footeraddress"
import Logo from "../resources/dlogo.png"
export default function Footer(){
    return (
        <div className={styles.footer} >
            <Footercards title={"About Us"} >
     
         <div className={styles.aboutus}>
             <img alt="logo" src={Logo} style={{width:100, height:100}}/>    
            <div className={styles.footerdescription}>
            D’s World private care Companionship was established 2021 by Mrs .....
            This idea started after Mrs..... had developed passion for 
            helping and taking care of people especially the elderly in 
            the community. D's world offers greate services at best and
            affordable rates        
            </div>
            </div>
</Footercards>
<Footercards title={"Our Services"} large={true}>
    <div className={styles.footercolumns}>

    <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Serving as a companion to Client</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Meal preparation</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Light housekeeping</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Medication reminder</Footerparagraph>
         </div>
        <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Assisting with transfer & mobility</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Assisting our clients through & from appointments</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Maintaining a safe & comfortable home environment</Footerparagraph>
         </div>
        </div>
    </Footercards>

    <Footercards title={"Our Info"} >
    <Footeraddress><strong>Tel:</strong></Footeraddress>
<Footeraddress>832-916-0400</Footeraddress>

<hr/>
<Footeraddress><strong>Location:</strong></Footeraddress>
<Footeraddress>14706 Loxley Meadows drive</Footeraddress>
<Footeraddress>Houston tx 77082</Footeraddress>
<hr/>
<Footeraddress><strong>Social Media:</strong></Footeraddress>
<Footeraddress>	<div class={styles.socialmedia}>
	 <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
  <a href="#" class="google"><i class="fa fa-instagram"></i></a>
   <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>

 </div></Footeraddress>

    </Footercards>


        </div>
    )
}