import styles from "../layout.module.css"
import 'font-awesome/css/font-awesome.min.css';

export default function Parallaxword(props){
    
    return(
        <div className={styles.parallaxwordcontainer}>
            <div className={styles.parallaxfonticon} >{props.icon}</div>
            <span className={styles.parallaxwordtitle} style={{color:props.titlecolor?props.titlecolor:null}}>{props.wordtitle}</span>
            <span className={styles.parallaxwordcontent} style={{color:props.contentcolor?props.contentcolor:null}}>{props.children}</span>
            {props.button &&  <a href="tel:+8323437049"><button className={styles.parallaxbutton}>{props.button}</button></a>}
        </div>
    )
}