import validator from 'validator'

const validateSignup=(data) =>
{
    let errors={
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirm_password:''

    }
    const {first_name, last_name, email, password, confirm_password}= data

    if(validator.isEmpty(first_name))
    {
        errors.first_name= "First Name is required."
    }
    if(validator.isEmpty(last_name))
    {
        errors.last_name= "Last Name is required."
    }
    if(validator.isEmpty(email))
    {
        errors.email= "Email is required."
    }
    if(validator.isEmpty(password))
    {
        errors.password= "Password is required."
    }
    if(validator.isEmpty(confirm_password))
    {
        errors.confirm_password= "Retype your password."
    }
    console.log("mydata", errors)
    return {
        isInvalid: Object.keys(errors).length >0,
        errors:errors,
    }
}

export default validateSignup