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
            <img alt="logo" src={Logo} style={{width:140, height:140}}/>
   <div className={styles.logoCaption}>
    <span className={styles.logoCaptionText1}>JOINT</span>
    <span className={styles.logoCaptionText2} style={{color:'white'}}>HEALTH CARE SERVICE INC.</span>
   </div>
            </div>
            <div className={styles.socialmedia}>
              <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
              <a href="https://www.twitter.com" className="twitter" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
              <a href="https://www.instagram.com" className="google" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            </div>
            </div>
            <div className={styles.footerLower}>
            <Footercards title={"About Joint Health Care"} >
     
         <div className={styles.aboutus}>
            <div className={styles.footerdescription}>
            We provide dependable home health support with a calm approach, strong follow-through, and clear communication. Our team works closely with families, physicians, and referral partners to create practical care plans that support comfort, safety, and independence at home.
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

    <Footercards title={"Contact & Hours"} >
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
<Footeraddress> 24/7 referral response</Footeraddress>
</div>
</div>
<div className={styles.footer_infos}>
<div className={styles.textBundle}>
<Footeraddress><strong>Location:</strong></Footeraddress>
<Footeraddress>6430 Evening Rose Lane</Footeraddress>
<Footeraddress>Katy Tx 77449</Footeraddress>

</div>
<div className={styles.textBundle}>
<Footeraddress><span style={{fontSize:15, color:"rgb(252, 227, 209)" }}><strong>24 hour service</strong></span></Footeraddress>
<Footeraddress><a href="mailto:jointhealthcare@yahoo.com" style={{color:"inherit"}}>jointhealthcare@yahoo.com</a></Footeraddress>
</div>
</div>
</div>

    </Footercards>
    </div>
    <div className={styles.footerSub}>
        <span>Copyright 2026 <span style={{color:"rgb(218, 96, 9)"}}>Joint Health Care Inc.</span> All Rights Reserved</span>
        <span><a href="tel:713 592 8955" className={styles.footerPolicyLink}>Call for referrals</a></span>
    </div>

        </div>
    )
}
