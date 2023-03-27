import styles from "../layout.module.css"

export default function Footerparagraph(props){
    return(
    
    <div className={styles.footerparagraph}>
        {props.children}
    </div>)
}