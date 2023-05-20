import Headers from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import Application from "./Application";
import styles from "../Layout/layout.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";

export default function SentApplication(){
    const navigate=useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
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
   <div className={styles.response}>
    <div className={styles.response_fa}><i className="fa fa-check-circle" ></i></div>
    <div className={styles.response_message1}>APPLICATION SUBMITTED SUCCESSFULLY</div>
    <div className={styles.response_message2}>A copy of this application has also been sent to your mail</div>
<div className={styles.return_button}>
              <button  className={styles.applicationButton} onClick={returnBack}>Back to Home Page</button>
              </div>
   </div>
        </div>
        <Footer/>
        </div>
    )
}