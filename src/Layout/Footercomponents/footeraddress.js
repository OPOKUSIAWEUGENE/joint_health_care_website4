import styles from "../layout.module.css"

export default function Footeraddress(props){
    return(
        <div className={styles.footeraddress}>
            {props.children}

        </div>
    )
}