


// export const errorRequired=(name)=>({value:true, message: name+" required"});
// export const errorMax=(name, value)=>({value:value, message: name+" must be less than "+value});
// export const errorMin=(name, value)=>({value:value, message: name+" must be greater than "+value});
// export const errormaxLength=(name, value)=>({value:value, message: name+" must be less than "+value});
// export const errorminLength=(name, value)=>({value:value, message: name+" must be greater than "+value});
// export const errorParthern=( value)=>({value:value, message:"please use the right text format"});


export const errorValidation=(name, validation)=>({
        required:validation.required?{value:true, message: name+" required"}:"",
        Max:validation.Max?{value:validation.Max, message: name+" must be less than "+validation.Max}:"",
        min:validation.min?{value:validation.Min, message: name+" must be greater than "+validation.Min}:"",
        maxLength:validation.maxLength?{value:validation.maxLength, message: name+" must be less than "+validation.maxLength}:"",
        minLength:validation.minLength?{value:validation.minLength, message: name+" must be greater than "+validation.minLength}:"",
        pattern:validation.pattern?{value:validation.pattern, message:"please use the right text format"}:""
}


)
