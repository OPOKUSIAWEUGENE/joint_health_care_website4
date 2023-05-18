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
        input:{
          label:"Name and location of high school attended ", type:"textarea", placeholder:"Enter name and location of high school attended ",name:"hight_school_attended", value:"",
                validation:{required:true,  pattern:/[0-9]$/}
              }
      },
       {
        select:{
         label:"High school level attained",
               type:"select",name:"hight_school_level_attained", defaultvalue:"12",
               validation:{required:false,  Min:8 },
               options:[ 
                         {value:"9", label:"9"},
                         {value:"10", label:"10"},  
                         {value:"11", label:"11"},
                         {value:"12", label:"12"},      
                      ],
                   //   defaultvalue:true           
             }
     },
     {
      input:{
        label:"Name and location of college attended ", type:"textarea", placeholder:"Enter name and location of college attended ",name:"college_attended", value:"",
              validation:{required:true,  pattern:/[0-9]$/}
            }
    },
     {
      select:{
       label:"College level attained",
             type:"select",name:"college_level_attained", defaultvalue:"4",
             validation:{required:false,  Min:8 },
             options:[ 
                       {value:"1", label:"1"},
                       {value:"2", label:"2"},  
                       {value:"3", label:"3"},
                       {value:"4", label:"4"},      
                    ],
                 //   defaultvalue:true           
           }
   },
   {
    input:{
      label:"List professional licenses you posses, Indicate type of license, the number and the state ", type:"textarea", placeholder:"Enter details of licenses ",name:"details_of_licenses", value:"",
            validation:{required:true,  pattern:/[0-9]$/}
          }
  },
  {
    input:{
      label:"List any languages spoken other than English ", type:"textarea", placeholder:"Enter details of languages spoken",name:"languages_spoken", value:"",
            validation:{required:true,  pattern:/[0-9]$/}
          }
  },
  {
    input:{
      label:"List other skills applicable to the position you are applying for ", type:"textarea", placeholder:"Enter skills",name:"skills", value:"",
            validation:{required:true,  pattern:/[0-9]$/}
          }
  },
          {
            submit:{
                    type:"submit", value:loading?"Loading...":"Apply"
                  }
          }
        ]



       function handleSubmit(event) {
          event.preventDefault();
          const data = new FormData(event.target);
      alert('this is workding');
          console.log(data); // Reference by form input's `name` tag
      
          // fetch('/api/form-submit-url', {
          //   method: 'POST',
          //   body: data,
          // });
        }
      
      
          return (
            <div className={styles.applicationPage} >
        <div className={styles.formHeight}> 
       
        <div className={styles.form}>  
        <div className={styles.formHeader}>APPLICATION FORM</div>
            <form  className={styles.form} onSubmit={handleSubmit}>

              <dniv className={styles.inputGroup}>
              <label htmlFor="firstanme">Enter firstanme</label>
              <input id="firstname" name="firsrtname" type="text" />
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="lastname">Enter lastname</label>
              <input id="lastname" name="lastname" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="email">Enter email</label>
              <input id="email" name="email" type="email" />
              </div>
              <dniv className={styles.inputGroup}>
              <label htmlFor="telephone">Enter phnone number</label>
              <input id="telephone" name="telephone" type="text" />
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="address">Enter Address</label>
              <input id="address" name="address" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="email">Enter email</label>
              <input id="email" name="email" type="email" />
              </div>
              <dniv className={styles.inputGroup}>
              <label htmlFor="state_city_region">Enter State/City/Region</label>
              <input id="state_city_region" name="state_city_region" type="text" />
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="email">Are you above 18 years?</label>
              <select id="above_10yrs" name="above_10yrs" type="text" >
              <option value="1">Yes</option>
             <option value="0">No</option>
        </select>
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="position">Job Position</label>
              <select id="position" name="position" type="text" >
              <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="position">Job Type</label>
              <select id="type" name="type" type="text" >
              <option value="full-time">Full Time</option>
  <option value="part-time">Part Time</option>
  <option value="weekend">weekend</option>
  <option value="week days">week days</option>
</select>
              </div>
          
              <dniv className={styles.inputGroup}>
              <label htmlFor="citizen">If you are not a US citizen, do you have the legal rights to remain permanentlly in the US?"r</label>
              <select id="citizen" name="citizen" type="text" >
              <option value="1">Yes</option>
             <option value="0">No</option>

              </select>
              </dniv>
              <div className={styles.inputGroup}>
              <label htmlFor="salary_enquirement">Enter Salary Expectation</label>
              <input id="salary_enquirement" namne="salary_enquirement" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="date_available"nn>Enter Date Available</label>
              <input id="date_available" name="date_available" type="date" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="adequate_transpoertation">Do you have adequate transportation to get to  work on time each day and when called on short notice during normal working hours?</label>
              <select id="adequate_transportation" namne="adequate_transportation" type="text" >
              <option value="1">Yes</option>
             <option value="0">No</option>

                </select>
              </div>
             
              <div className={styles.inputGroup}>
              <label htmlFor="high_school_name"nn>Enter High school's Name</label>
              <input id="high_school_name" name="hight_school_name" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="high_school_level">Select High school level</label>
              <select id="high_school_level" namne="high_school_level" type="text" >
              <option value="9">9</option>
             <option value="10">10</option>
             <option value="11">11</option>
             <option value="12">12</option>

                </select>
              </div>

              <div className={styles.inputGroup}>
              <label htmlFor="colledge_name"nn>Enter Colledge Name</label>
              <input id="colledge_name" name="colledge_name" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="colledge_level">Select Colledge level</label>
              <select id="colledge_level" namne="colledge_level" type="text" >
              <option value="1">1</option>
             <option value="0">2</option>
             <option value="3">3</option>
             <option value="4">4</option>

                </select>
              </div>

              <div className={styles.inputGroup}>
              <label htmlFor="professional_license">Provide professional license</label>
              <input id="professional_license" name="professional_license" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="language">List any languages spoken other than English</label>
              <textarea id="language" name="language" type="text" />
              </div>
              <div className={styles.inputGroup}>
              <label htmlFor="skills">List other skills applicable to the position you are applying for</label>
              <textarea id="skills" name="skills" type="textarea" />
              </div>

              <div className={styles.inputGroup}>
              <label htmlFor="skills">Upload CV</label>
              <input id="cv" name="cv" type="file" />
              </div>
              <div className={styles.inputGroup}>
              <button>Submit</button>
              </div>
            </form>
            </div>
            </div>
            </div>
          )
        
}


