import styles from "../layout.module.css"

export default function Rowparagraph(props){
    return(
        <div className={styles.rowparagraph}>
            <span className={styles.rowparagraphtitle}> {props.title}</span>
            <span className={styles.rowparagraphcontent}>{props.children}</span>
        </div>
    )
}