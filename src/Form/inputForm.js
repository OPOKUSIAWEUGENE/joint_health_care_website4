import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { errorValidation } from "./errorMessages"
import styles from "./Form.module.css"


 export default function InputForm(props){

const {handleSubmit, register,formState:{errors}, watch, setValue}=useForm();
const [selectedFile, setSelectedFile] = useState()
const [preview, setPreview] = useState()
const title = watch("profile");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = (selectedimage) => {

    if (!selectedimage|| selectedimage.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(selectedimage[0])
}

React.useEffect(() => {
   onSelectFile(title)
 // console.log(title);
  }, [title]);

function displayError(error){
    return <span className={styles.errors}> {errors[error]&& errors[error].message }</span>
}

const inputform=(
    <div>
       
<form className={styles.form} onSubmit={handleSubmit(props.onSubmit)}>
{/* {props.logo} */}
{props.logo&&<img src={props.logo} style={{height:60, width:60}}  alt="logo"/>}
{props.img&&<div style={{height:120, width:120, textAlign:"center", border:"1px solid grey"}}><img height="120" width="120" src={preview} alt="logo"/></div> }

{props.data.map((data, index)=>{
const typeSelect=data.select &&<>
                    {data.select.label}
                    <select      
                    className={styles.input} style={{height:35, width:280 }}
                    defaultValue={data.select.defaultvalue} name={data.select.name}  
                    {...register(`${data.select.name}`,{required:"required"})} 
                    >
                    {data.select.options.map((options, optionindex)=>{
                    return  <option key={optionindex} value={options.value}>{options.label}</option>
                     })}
                    </select>
                    {displayError(data.select.name)}
                    </>
        
 const typeInput=data.input && <>
                    {data.input.label}
                    <input  className={styles.input} style={{height:35, width:280 }}
                    type={data.input.type} placeholder={data.input.placeholder} name={data.input.name}  defaultValue={data.input.value}  
                    {...register(`${data.input.name}`,
                    errorValidation(data.input.name, data.input.validation)
                   // {required:{value:true, message:"required"}, maxLength:{value:4, message:"values working"}, pattern:{value:/^[a-zA-Z]+$/, message:"please use the right text format"}} 
                    )}
                    />
                    {displayError(data.input.name)}
                    </>
 const typeFile=data.file && <>
                 
                    <input  className={styles.input} style={{width:280 }} onChange={props.handleChange}
                     type={data.file.type} name={data.file.name}  defaultValue={data.file.value}  
                     {...register(`${data.file.name}`,
                     errorValidation(data.file.name, data.file.validation)
                    // {required:{value:true, message:"required"}, maxLength:{value:4, message:"values working"}, pattern:{value:/^[a-zA-Z]+$/, message:"please use the right text format"}} 
                     )}
                     />
                     {displayError(data.file.name)}
                     </>
                
 const typeSubmit= data.submit && <> <input type={data.submit.type} value={data.submit.value}  className={styles.submitbutton} style={{height:35, width:285 }}/>
                                 </>
                        
                                 
return(
    <div className={styles.inputContainer} key={index}>
         
            {typeSelect} 
            {typeInput} 
            {typeFile}
            {typeSubmit} 
          
    </div>
);
})}
    </form>
    </div>
)

return(
    <>   
    {inputform}    
    </>

)
}



