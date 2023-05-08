import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from '../Form/inputForm'
import styles from "../Layout/layout.module.css"
import swal from 'sweetalert';

async function storeApplicant(credentials) {

  
    return fetch(`${process.env.REACT_APP_BASE_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
  
export default function Application(){


  
    const [count, setCount]=useState(1);
    const [loading, setLoading] = useState(false);
  
  const navigate=useNavigate();
    async function Onsubmit(credential, e){

        navigate('/sent-application');
      e.preventDefault();  
      setLoading(true);
      const response = await storeApplicant(credential);
    
     if (response.data) {

            navigate('/sent-application');
          window.location.reload();
      } else {
        setLoading(false)
        swal("Failed", JSON.stringify(response.errors[0]), "error");
      }
      response.errors &&  swal("Failed", JSON.stringify(response.errors[0]), "error");
    }
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
      const data=[
          {
            input:{
                    type:"text", placeholder:"Enter Firstname",name:"firstname", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-zA-Z]$/}
                  }
          },
          {
            input:{
                    type:"text", placeholder:"Enter Lastname",name:"lastname", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-zA-Z]$/}
                  }
          },
          {
            input:{
                    type:"email", placeholder:"Enter Email",name:"email", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                  }
          },
          {
            input:{
                    type:"text", placeholder:"Enter City/State/Region name",name:"city_state_region", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                  }
          },
          {
            input:{
                    type:"password",name:"password", value:"", placeholder:"Enter Password",
                    validation:{required:true,  maxLength:50 }
                  }
          },   
          {
            submit:{
                    type:"submit", value:loading?"Loading...":"Apply"
                  }
          }
        ]
    return(
      <div className={styles.applicationPage} >
        <div className={styles.formHeight}> 
        <div className={styles.form}>  
 <InputForm  data={data} onSubmit={Onsubmit}  />
        </div>
        </div>
        </div>
    )
}


