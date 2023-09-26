import api from "../api";
import DecodeJwt from "./jwtdecoder";
const fetchData=async(data)=>{
    try{        
       const response= await api.get('user/getuser')
       if(response.status==200){
        return response.data.user;
       }
       else {
        return false;
       }
    }catch(err){
        console.log(err)
        return false;
    }
       
        
   
}
export default fetchData;