import './App.css';
import Landing_page from './components/landingpage';
import Login_user from './components/login';
import Sinup_user from './components/sinup';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ViewMyAds from './components/viewads';
import Post_my_ad from './components/postad';
import Auth_user from './authentications/apphoc';
import { useEffect, useState } from 'react';
import fetchData from './helper/fetchuserfromjwt';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  // const [status, setstatus] = useState(false)
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.data);
  // const jwtToken = localStorage.getItem("jwt");
  // useEffect(() => {
  //   const validateToken = async () => {          
  //           if(jwtToken&&(Object.keys(data).length === 0)){
  //             let dataa = await fetchData(jwtToken);
  //             await dispatch({ type: 'SET_DATA', payload: { value:dataa } }); 
  //             }else{
                    
  //           }      
  //   }
  //   validateToken()
  
  // }, [jwtToken])
  
return (
<>
      <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={<Sinup_user user={"sd"}/>}/>
        <Route path="/" element={<Login_user/>}/>
        <Route path='/home'element={<Landing_page/>}/>
        <Route path='/viewads' element={
        <Auth_user >
           <ViewMyAds/>
          </Auth_user>           
        }/>
        <Route path='/postads' element={<Post_my_ad/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Landing_page/> */}
            
            </>
  );
}

export default App;
