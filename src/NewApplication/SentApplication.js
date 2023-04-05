import Headers from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import Application from "./Application";
import styles from "../Layout/layout.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function SentApplication(){
    const navigate=useNavigate();
function returnBack()
{
    navigate('/');

}
const handleExcelExport=async()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}generate-vote-excel`, {
        method: 'GET',
        headers: {
            //   'Content-Type': 'application/json',
            //    'Authorization': 'Bearer '+sessionStorage.getItem('access_token')
             },
        responseType: 'blob', // important
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${Date.now()}.xlsx`);
        document.body.appendChild(link);
        link.click();
    });
}
    return(
        <div className={styles.layout}>
        <Headers/>
        <div className={styles.formHeight}> 
        <div className={styles.form}>  

<div className={styles.sent_application_detail}>Application Successfully Sent</div>
<div className={styles.sent_application_button}><button onClick={handleExcelExport}>View Application</button><button onClick={returnBack}>Return</button></div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}