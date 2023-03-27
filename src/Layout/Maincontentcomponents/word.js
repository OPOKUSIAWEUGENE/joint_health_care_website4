import styles from "../layout.module.css"

export default function Word(props){
    return(
        <div className={styles.wordcontainer}>
            <span className={styles.wordtitle}>{props.wordtitle}</span>
            <span className={styles.wordcontent}>{props.wordcontent}</span>
            {props.button && <button className={styles.parallaxbutton}>{props.button}</button>}
        </div>
    )
}