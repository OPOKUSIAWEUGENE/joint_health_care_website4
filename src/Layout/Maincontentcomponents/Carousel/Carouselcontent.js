import "./Carousel.css"
// import styles from "../../layout.module.css"
import Electricity from "../../Headercomponents/electricity"

export default function Carouselcontent(props){

    return(
     <div className="carouselcontent">
           <div>{props.icon} </div>
       
        <div className="contenttitle">{props.title}</div>
        <div className="line"><div style={{borderBottom:`1px solid rgba(252, 208, 194)`, width:"70px"}}>
            </div><Electricity height={20} width={20} fill={"rgba(252, 208, 194)"}/>
            <div style={{borderBottom:`1px solid rgba(252, 208, 194)`,  width:"70px"}}>
            </div></div>
        <div className="contentbody">{props.children}</div>
         
     </div>
    )
}