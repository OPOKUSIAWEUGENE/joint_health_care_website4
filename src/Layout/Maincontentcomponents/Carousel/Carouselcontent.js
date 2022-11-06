import "./Carousel.css"
// import styles from "../../layout.module.css"
import Electricity from "../../Headercomponents/electricity"

export default function Carouselcontent(props){

    return(
     <div className="carouselcontent">
           {/* <div><img style={{height:20, width:20}} src={props.icon} alt="icon"/></div> */}
       
        <div className="contenttitle">{props.title}</div>
       
        <div className="contentbody">{props.children}</div>
         
     </div>
    )
}