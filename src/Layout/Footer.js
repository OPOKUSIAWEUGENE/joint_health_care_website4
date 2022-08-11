import styles from "./layout.module.css"
import Footercards from "./Footercomponents/Footercards"
import Footerparagraph from "./Footercomponents/footerparagraph"
import Electricity from "./Headercomponents/electricity"
import Footeraddress from "./Footercomponents/footeraddress"
export default function Footer(){
    return (
        <div className={styles.footer}>
            <Footercards >
<div className={styles.logo}>
            <div className={styles.logotext}>
             <span className={styles.footlogoup}>ELLITEFAM</span>
            <span className={styles.footlogodown}>Company Ltd</span>
            </div>
            <div>
            <span><Electricity height={100} width={100} fill={"white"}/></span>
            </div>
            </div>
            <div className={styles.footerdescription}>
       
            Ellitefam is an energy commission certified electrical company founded by  
            Patrick, a certified electrical engineer, with years of 
            experience delivery and mentainance of electrical solutions.
        
            </div>
</Footercards>
<Footercards title={"Our Services"} large={true}>
    <div className={styles.footercolumns}>
    <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Electrical Designs</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Electrical wiring installation</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Streetlight installation</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Sachet water machine setup & installation</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Factory machine setup and maintenance</Footerparagraph>
        </div>
        <div className={styles.columndivisions}>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Generator maintenance</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Home automation</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> General electrical supplies</Footerparagraph>
        <Footerparagraph><Electricity height={15} width={35} fill={"rgb(189, 175, 175)"}/> Gas/diesel boiler machine maintenance</Footerparagraph> 
        </div>
        </div>
    </Footercards>

    <Footercards title={"Our Info"} >
    <Footeraddress><strong>Tel:</strong></Footeraddress>
<Footeraddress>0247493689</Footeraddress>
<Footeraddress>0245959600</Footeraddress>
<hr/>
<Footeraddress><strong>Location:</strong></Footeraddress>
<Footeraddress>Somanya, Eastern Region</Footeraddress>
<Footeraddress>New ECG - Yikrosec Road</Footeraddress>
<Footeraddress>Close to the Yilo Krobo SHS School field</Footeraddress>
    </Footercards>


        </div>
    )
}