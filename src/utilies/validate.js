export const checkvalidation=(email,password)=>{

    const isEmailValidate=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

    if(!isEmailValidate)
    {
        return "Email is not Valid";
    }
    else if(!passwordRegex)
    {
        return "Password is not Valid";
    }
    return null; 
}
