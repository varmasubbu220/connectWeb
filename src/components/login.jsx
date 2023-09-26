import { useState } from "react"
import google from "../assets/google-48.png"
import "../cssfiles/sinup.css"
import { useNavigate } from "react-router-dom"
import { validate_password, validate_Number, Check_email } from '../validations/fieldvalidation'
import React from 'react';
import api from '../api'
const Login_user = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [errormsg, seterrmsg] = useState(null)
    const Handle_login = async () => {
        let passwordstatus = validate_password(password) //checks password format
        let mailstatus; // it may be a mobile or email 

        if (!isNaN(email)) {
            mailstatus = validate_Number(email)

        } else {
            mailstatus = Check_email(email);

        } // above condition checks is user entered a email or mobile
        if (passwordstatus && mailstatus) {
            const obj = {
                email: email,
                password: password
            };
            try {                
                let response = await api.post("/user/login", obj)
                if (response.data.status == 200) {
                    localStorage.setItem("jwt", JSON.stringify(response.data.token));
                    navigate('/home')
                } else if (response.data.status == 401) {
                    seterrmsg(response.data.msg);
                } else if (response.status == 500) {
                    throw new Error("internal server error");
                }
            } catch (error) {
                console.error(error);
                seterrmsg("client error");
            }
        } else {

            seterrmsg("give correct format")
        }
    }

    return (<>
        <div className="sinup_page">


            <div className="content-area" >
                <div className="content"><h2>Welcome back! It's great to see you again. Let's get you back to your journey</h2></div>
                <div className="lower-text" id="for-circle">

                    <button id="skiplag" onClick={() => { navigate('/home') }} >Skip-This-Lag</button>
                    <hr />

                </div>
                {errormsg && (
                    <div className="error-message">
                        <strong>{errormsg}</strong>
                        <button onClick={() => seterrmsg(null)}>OK</button>
                    </div>
                )}

            </div>

            <div className="circle-holder">
                <div className="circle-one" id="circleone"></div>
                <div className="circle-one" id="circle-two"></div>

                <div className="text-fields">
                    <div className="inner-fields">
                        <section className="sinup-text" ><h2>Login</h2> <h4>Unlock a world of possibilities</h4></section>
                        <input type="email" placeholder="email" onBlur={(e) => setEmail(e.target.value)} />

                        <input type="password" placeholder="password" onBlur={(e) => setpassword(e.target.value)} />

                        <button onClick={Handle_login} >Login</button>

                        <div className="or"><div></div><h3>or</h3><div></div></div>
                        <div className="social-icons" ><img src={google} alt="" id="google-icon" /></div>
                        <div className="text-field-footer">
                            <h3>Not yet Registered ? <a href="http://localhost:3000/signup">register</a> </h3>
                            <div className="text-foot"><h3>Terms&conditions</h3><h3>support</h3><h3>customer-care</h3></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </>)
}
export default Login_user;