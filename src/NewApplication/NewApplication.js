import Headers from "../Layout/Header";
import Footer from "../Layout/Footer";
import Application from "./Application";
import styles from "../Layout/layout.module.css";

export default function NewApplication(){

    return(
        <div className={styles.layout}>
        <Headers/>
       <Application/>
        <Footer/>
        </div>
    )
}
