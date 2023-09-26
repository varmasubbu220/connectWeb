import '../cssfiles/nav.css'
import logo from "../assets/connectlogo.jpg"
import React from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import profile from '../assets/profile.png'
import user from "../assets/user.png"
import ProfileBar from '../views/profilebar';
import fetchData from '../helper/fetchuserfromjwt';

const Nav_bar = () => {
  const [userdetails, setUserDetails] = useState(false)
  const [profilebar, setProfilebar] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const jwtToken = localStorage.getItem("jwt");
  const navigate = useNavigate()
  console.log(data)
  const Logout = () => {

    localStorage.removeItem('jwt');
    setUserDetails(false)
    dispatch({ type: 'SET_DATA', payload: { value: {} } });

  }
  useEffect(() => {
    const validateToken = async () => {          
            if(jwtToken&&(Object.keys(data).length === 0)){
              let dataa = await fetchData(jwtToken);
              await dispatch({ type: 'SET_DATA', payload: { value:dataa } }); 
              }else{
                    
            }      
    }
    validateToken()
  
  }, [jwtToken])
  useEffect(() => {
     if ((data&&data.value) && jwtToken) {
      setUserDetails(data.value)
      } else {
        setUserDetails(false)
      }
      
  }, [data])
  return (
    <>
      <div className="main_nav">
        <div id='logo'>
          <img src={logo} alt="" />
        </div>

        <div id="nav-links">
          <ul>
            <li>
              Home
            </li>
            <li>
              Services
            </li>
            <li onClick={() => { navigate("/postads") }}>post-Add</li>
            <li>contact</li>

          </ul>
        </div>{profilebar && userdetails ? <ProfileBar userdetails={userdetails} user={user} log={Logout} /> : <></>}
        <div className='profile'>{data&&data.value&&userdetails?<img src={profile} onClick={() => { setProfilebar(!profilebar) }} alt="profile-icon" />:<></>}</div>
        <div id='auths'>
          {data&&data.value&&userdetails? <></> : <><button id="sinup-button" onClick={() => { navigate('/signup') }}>sign-up</button>
            <button id="login-button" onClick={() => { navigate('/') }}>login</button></>}
        </div>

      </div >
    </>
  )
}
export default Nav_bar;

