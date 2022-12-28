import styles from "./layout.module.css"
import Footercards from "./Footercomponents/Footercards"
import Footerparagraph from "./Footercomponents/footerparagraph"
import Electricity from "./Headercomponents/electricity"
import Footeraddress from "./Footercomponents/footeraddress"
import Logo from "../resources/logo.svg"
export default function Footer(){
    return (
        <div className={styles.footer} >
            <div className={styles.footerUpper}>
            <div className={styles.logoFrame}> 
            <img alt="logo" src={Logo} style={{width:60, height:60}}/>
   <div className={styles.logoCaption}>
    <span className={styles.logoCaptionText1}>JOINT</span>
    <span className={styles.logoCaptionText2} style={{color:'white'}}>HEALTH CARE INC.</span>
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
            <Footercards title={"About Us"} >
     
         <div className={styles.aboutus}>
             {/* <img alt="logo" src={Logo} style={{width:100, height:100}}/>     */}
            <div className={styles.footerdescription}>
            Joint health CareJoint health CareJoint health CareJoint health CareJoint health 
            CareJoint health CareJoint health CarevJoint health CareJoint health Care
            Joint health CareJoint health CareJoint health CareJoint health Care
               
            </div>
            </div>
</Footercards>
<Footercards title={"Our Services"} large={true}>
    <div className={styles.footercolumns}>

    <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>  Physical Therapy</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/>Speech Therapy</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Home health and CNA</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> MSW</Footerparagraph>
     
          </div>
        <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Home health</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Hospice care</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Pediatrics consult</Footerparagraph>
   
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
    )
}