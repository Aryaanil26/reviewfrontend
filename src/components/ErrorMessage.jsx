import React from "react";


function ErrorMessage(props) {
    const { type, field} = props
    console.log(type)
    let errorMessage;
    if (type === 'maxlength') {
        errorMessage = '$(field) is too long!'
    }
    else if (type === 'required') {
        errorMessage='$(field) is required'
    }
    else if (type === "pattern" && field === "Password") { errorMessage = 'Password should contin atleast one small letter,caps letter,number and special character.Min 6 chaaracters,max 16'
    }
    return (
        <span> {errorMessage} </span>
    );
    
}  

    export default ErrorMessage;

