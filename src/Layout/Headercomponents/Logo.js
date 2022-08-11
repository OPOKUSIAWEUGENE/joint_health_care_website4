import styles from "../layout.module.css"
import Electricity from "./electricity"

export default function Logo(){

    return(
        <div className={styles.logo}>
            <div className={styles.logotext}>
             <span className={styles.logoup}>ELLITEFAM</span>
            <span className={styles.logodown}>Company Ltd</span>
            </div>
            <div>
            <span><Electricity height={50} width={50} fill={"rgb(189, 35, 35)"}/></span>
            </div>
        </div>
    )
}