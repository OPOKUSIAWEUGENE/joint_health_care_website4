
import styles from "../layout.module.css"
export default function Square(props){
    return(
        <div className={styles.square} >{props.title}</div>
    )
}