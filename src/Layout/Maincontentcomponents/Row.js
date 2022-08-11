import styles from "../layout.module.css"

export default function Row(props){
    return(
        <div className={styles.row}>
            {props.children}
        </div>
    )
}