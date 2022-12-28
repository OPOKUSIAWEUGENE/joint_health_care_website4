
import styles from "../layout.module.css"
export default function Square(props){
    return(
        <div className={styles.square} style={{height:props.height, width:props.width}} >{props.fa}   &nbsp;{props.title}</div>
    )
}