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
  
    


      async function handleSubmit(event) {
          event.preventDefault();

        
          const data = new FormData(event.target);
        
          const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: data
        };
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}add-applicant`,requestOptions);
        const datas = await response.json();
       if(response.ok)
       { 
        navigate('/sent-application');
       }
     else{
      alert('application not sent. please try sending the application again')
     }
        }
      
      
          return (
            <div className={styles.applicationPage} >
        <div className={styles.formHeight}> 
       
        <div className={styles.form}>  
        <div className={styles.formHeader}>APPLICATION FORM</div>
            <form  className={styles.form} onSubmit={handleSubmit}>

              <dniv className={styles.inputGroup}>
              <label htmlFor="firstanme">Enter firstanme</label>
              <input required id="firstname" name="firstname" type="text" />
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="lastname">Enter lastname</label>
              <input required id="lastname" name="lastname" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="email">Enter email</label>
              <input required id="email" name="email" type="email" />
              </div>
              <dniv className={styles.inputGroup}>
              <label htmlFor="phone">Enter phnone number</label>
              <input required id="phone" name="phone" type="text" />
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="address">Enter Address</label>
              <input required id="address" name="address" type="text" />
              </div>
             
              <dniv className={styles.inputGroup}>
              <label htmlFor="state_city_region">Enter State/City/Region</label>
              <input required id="state_city_region" name="state_city_region" type="text" />
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="email">Are you above 18 years?</label>
              <select id="above_10yrs" name="above_10yrs" type="text" >
              <option value="Yes">Yes</option>
             <option value="No">No</option>
        </select>
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="position">Job Position</label>
              <select id="position" name="position" type="text" >
              <option value="RN">RN</option>
              <option value="LVN">LVN</option>
              <option value="aide">AIDE</option>
              <option value="HOME HEALTH AIDE">HOME HEALTH AIDE</option>
              <option value="PT">PT</option>
              <option value="OT">OT</option>
              <option value="MSW">MSW</option>
</select>
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="position">Job Type</label>
              <select id="type" name="type" type="text" >
              <option value="Full Time">Full Time</option>
  <option value="Part Time">Part Time</option>
  <option value="Weekend">weekend</option>
  <option value="Week Days">week days</option>
</select>
              </div>
          
              <dniv className={styles.inputGroup}>
              <label htmlFor="citizen">If you are not a US citizen, do you have the legal rights to remain permanentlly in the US?"r</label>
              <select id="citizen" name="citizen" type="text" >
              <option value="Yes">Yes</option>
             <option value="No">No</option>

              </select>
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="salary_expectation">Enter Salary Expectation</label>
              <input required id="salary_expectation" name="salary_expectation" type="number" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="date_available"nn>Enter Date Available</label>
              <input required id="date_available" name="date_available" type="date" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="adequate_transportation">Do you have adequate transportation to get to  work on time each day and when called on short notice during normal working hours?</label>
              <select id="adequate_transportation" name="adequate_transportation" type="text" >
              <option value="Yes">Yes</option>
             <option value="No">No</option>

                </select>
              </div>
             
              <div className={styles.inputGroup}>
              <label htmlFor="high_school_name"nn>Enter High school's Name</label>
              <input required id="high_school_name" name="high_school_name" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="high_school_level">Select High school level</label>
              <select id="high_school_level" name="high_school_level" type="text" >
              <option value="9">9</option>
             <option value="10">10</option>
             <option value="11">11</option>
             <option value="12">12</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
              <label htmlFor="college_name"nn>Enter College Name</label>
              <input required id="college_name" name="college_name" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="college_level">Select College level</label>
              <select id="college_level" name="college_level" type="text" >
              <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>

                </select>
              </div>

              <div className={styles.inputGroup}>
              <label htmlFor="professional_licence">Provide professional licence</label>
              <input required id="professional_licence" name="professional_licence" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="language">List any languages spoken other than English</label>
              <textarea required id="language" name="language" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="skills">List other skills applicable to the position you are applying for</label>
              <textarea required id="skills" name="skills" type="textarea required" />
              </div>

              <div className={styles.inputGroup}>
              <label htmlFor="cv">Upload CV (pdf)</label>
              <input required id="cv" name="cv" type="file" accept="application/pdf"/>
              </div>
              <div className={styles.inputGroup}>
              <button  className={styles.applicationButton}>Submit</button>
              </div>
            </form>
            </div>
            </div>
            </div>
          )
        
}


