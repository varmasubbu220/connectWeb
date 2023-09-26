import { useEffect, useState } from "react";
import axios from 'axios'
import "../cssfiles/sinup.css"
import{validate_username,validate_password,validate_Number,Check_email }from '../validations/fieldvalidation'
import { useNavigate } from "react-router-dom";
var bcrypt = require('bcryptjs');
const Sinup_user=()=>{
  const navigate=useNavigate() 
const[email,setEmail]=useState()
const[mobile,setMobile]=useState()
const[password,setpassword]=useState()
const[username,setUsername]=useState()
// above states are used to store the form data 
const HandleSubmit =async()=>{
    // this function id triggered when client submit data
    let emailstatus= Check_email(email)
    let mobilestatus=validate_Number(mobile)
    let passwordstatus=validate_password(password)
    let usernamestatus=validate_username(username)
    // Here above state are the booleans which is used to validate the form data

try {
    if (emailstatus && mobilestatus && passwordstatus && usernamestatus) {
      // if all booleans are true
      const newPassword =  bcrypt.hashSync(password, 10); // password hased and stored 
      let user = {
        username: username,
        email: email,
        password: newPassword, // Use the hashed password
        mobile: mobile,
      }; // object made with user data with encrypted password
      const response = await axios.post('http://localhost:8080/user/registration/', user);
      // api calls with user object and it returns  a response
      
       navigate('/') //navigates to login paGE
    } else {
      alert("Enter correct details");
    }
  } catch (error) {
    console.error(error);
    alert(error.response.data.error);
  }
};

return(
        <>
        <div className="sinup_page">
             
         <div className="content-area">
 <div className="content"><h2>Ready to Rent? Join now and find your perfect match! Discover a seamless rental experience with us</h2></div>
 <div className="lower-text"> 

 <button  >Skip-This-Lag</button>
 <hr />
 
 </div>

            </div>

            <div className="text-fields">
                <div className="circle-holder">
                     <div className="circle-one" id="circleone"></div>
                <div className="circle-one" id="circle"></div>
                <div className="inner-fields">
                <section className="sinup-text" ><h2>Sinup</h2> <h4>need some details of you</h4></section>
            <input type="text" placeholder="username" onBlur={(e)=>setUsername(e.target.value)}/>
                <input type="email" placeholder="email" onBlur={(e)=>setEmail(e.target.value)} />
                <input type="text" placeholder="mobile" onBlur={(e)=>setMobile(e.target.value)}/>
                <input type="password" placeholder="password" onBlur={(e)=>setpassword(e.target.value)}/>
                     <button onClick={HandleSubmit}>submit</button>  
                       <div className="or"><div></div><h3>or</h3><div></div></div>
                      <div className="text-field-footer">
                        <h3>Already Registered ? <a href="http://localhost:3000/">login</a> </h3>
                        <div className="text-foot"><h3>Terms&conditions</h3><h3>support</h3><h3>customer-care</h3></div>
                       </div>
                </div>            
            </div>
            </div>
            </div>
        
        </>
    )
}
export default Sinup_user;