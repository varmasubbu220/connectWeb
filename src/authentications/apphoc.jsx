
import { Navigate, useNavigate } from "react-router-dom"



const Auth_user=({children})=>{
    const navigate=useNavigate()
    
    const status = localStorage.getItem("jwt");
if(!status){
   return <Navigate to="/home" replace />
}else{
    return children;
}

}

export default Auth_user