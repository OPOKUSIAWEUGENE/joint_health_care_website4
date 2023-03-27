import styles from "../layout.module.css"

export default function Footercards(props){
    return(
        <div className={props.large?styles.footercardslarge:styles.footercards} >
        <div className={styles.footercardstitle}>{props.title}</div>
       <div className={styles.footercardsbody}> {props.children}</div> 
        </div>
    )
}