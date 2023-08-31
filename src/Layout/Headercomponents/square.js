
import styles from "../layout.module.css"
export default function Square(props){
    return(
        <div className={styles.square} onClick={props.onClick} style={{height:props.height, width:props.width}} >{props.fa}   &nbsp;{props.title}</div>
    )
}