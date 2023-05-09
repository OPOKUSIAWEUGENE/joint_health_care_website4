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
                    label:"Applicant's First Name",type:"text", placeholder:"Enter Firstname",name:"firstname", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-zA-Z]$/}
                  }
          },
          {
            input:{
              label:"Applicant's Last Name", type:"text", placeholder:"Enter Lastname",name:"lastname", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-zA-Z]$/}
                  }
          },
          {
            input:{
              label:"Email", type:"text", placeholder:"Enter Email",name:"email", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                  }
          },
          {
            input:{
              label:"Present Address", type:"text", placeholder:"Enter Present Address",name:"address", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                  }
          },
          {
            input:{
              label:"City/Region/State", type:"text", placeholder:"Enter City/State/Region ",name:"city_state_region", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                  }
          },
          {
            input:{
              label:"Phone", type:"telephone", placeholder:"Enter Phone Number ",name:"phonennnnnn", value:"",
                    validation:{required:true,  maxLength:50, pattern:/[0-9]$/}
                  }
          },
          {
            select:{
              label:"Are you above 18 years?",
                    type:"select",name:"is_eighteen", defaultvalue:"yes",
                    validation:{required:false,  Min:8 },
                    options:[ 
                              {value:"yes", label:"YES"},
                              {value:"no", label:"NO"},      
                           ],
                        //   defaultvalue:true           
                  }
          },
          {
            select:{
              label:"Business type?",
                    type:"type",name:"type", defaultvalue:"full_time",
                    validation:{required:false,  Min:8 },
                    options:[ 
                              {value:"full_time", label:"Full Time"},
                              {value:"part_time", label:"PART TIME"}, 
                              {value:"day", label:"DAY"},
                              {value:"night", label:"NIGHT"},       
                           ],
                        //   defaultvalue:true           
                  }
          },

          {
            select:{
             label:"Positionn",
                   type:"select",name:"is_eighteen", defaultvalue:"yes",
                   validation:{required:false,  Min:8 },
                   options:[ 
                             {value:"yes", label:"YES"},
                             {value:"no", label:"NO"},      
                          ],
                       //   defaultvalue:true           
                 }
         },
         {
          select:{
           label:"If you are not a US citizen, do you have the legal rights to remain permanentlly in the US?",
                 type:"select",name:"is_eighteen", defaultvalue:"yes",
                 validation:{required:false,  Min:8 },
                 options:[ 
                           {value:"yes", label:"YES"},
                           {value:"no", label:"NO"},      
                        ],
                     //   defaultvalue:true           
               }
       },
         
        {
          input:{
            label:"Salary Requirement ", type:"text", placeholder:"Enter Salary ",name:"salary_requirement", value:"",
                  validation:{required:true,  pattern:/[0-9]$/}
                }
        },
          {
            input:{
              label:"Date Available", type:"date", placeholder:"Enter Date ",name:"date", value:"",
                    validation:{required:true,  pattern:/[0-9]$/}
                  }
          },
      
        {
          input:{
            label:"Date Available ", type:"select", placeholder:"Enter Age ",name:"city_state_region", value:"",
                  validation:{required:true,  pattern:/[0-9]$/}
                }
        },
      
        {
          select:{
           label:"Do you have adequate transportation to get to <br> work on time each day and when called on short notice during normal working hours?",
                 type:"select",name:"have_adequate_transport", defaultvalue:"yes",
                 validation:{required:false,  Min:8 },
                 options:[ 
                           {value:"yes", label:"YES"},
                           {value:"no", label:"NO"},      
                        ],
                     //   defaultvalue:true           
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
        <div className={styles.formHeader}>APPLICATION FORM</div>
 <InputForm  data={data} onSubmit={Onsubmit}  />
        </div>
        </div>
        </div>
    )
}


