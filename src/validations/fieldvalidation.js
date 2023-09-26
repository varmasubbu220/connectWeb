
export const Check_email=(mail)=>{
    
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
         {
           return (true)
         }
         else{
           return (false)
         }

}
export const validate_username=(user)=> {
    if(/^[A-Za-z][A-Za-z0-9_]{4,14}$/.test(user)) {
        return true;
    } else {
        return false;
    }
}
export const validate_Number=(num) =>{
    if ( /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(num))
    {
      return (true)
    }
    else{
      return (false)
    }
  }

  export const validate_password=(pass) =>{
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass))
    {
      return (true)
    }
    else{
      return (false)
    }
  }
export default Check_email;