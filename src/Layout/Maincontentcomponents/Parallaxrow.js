import styles from "../layout.module.css"
import image from "../../resources/images/switch.jpg"
export default function Parallaxrow(props){
    return(
        <div className={styles.parallaxrow}>
            {props.children}
        </div>
    )
}