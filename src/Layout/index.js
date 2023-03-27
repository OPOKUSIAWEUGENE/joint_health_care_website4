import Headers from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./layout.module.css"

export default function Layout(){

    return(
        <div className={styles.layout}>
        <Headers/>
        <Main/>
        <Footer/>
        </div>
    )
}