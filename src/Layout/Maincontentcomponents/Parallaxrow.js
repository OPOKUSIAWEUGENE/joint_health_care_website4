import styles from "../layout.module.css"

export default function Parallaxrow(props){
    return(
        <div className={styles.parallaxrow}>
            {props.children}
        </div>
    )
}